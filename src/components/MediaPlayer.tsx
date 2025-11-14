import React, { useRef, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { useToast } from './ui/use-toast';
import { MediaControls } from './media/MediaControls';
import { VideoPlayer } from './media/VideoPlayer';
import { useScreenOrientation } from './media/useScreenOrientation';
import { Badge } from './ui/badge';
import { Volume2, Loader, Info } from 'lucide-react';

interface MediaPlayerProps {
  url: string;
  channelName?: string;
  channelLogo?: string;
  channelGroup?: string;
  onClose: () => void;
}

export const MediaPlayer = ({ 
  url, 
  channelName = 'Stream', 
  channelLogo,
  channelGroup,
  onClose 
}: MediaPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { toast } = useToast();
  const [isPiPSupported, setIsPiPSupported] = useState(false);
  const [isCasting, setIsCasting] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useScreenOrientation(videoRef.current);

  React.useEffect(() => {
    setIsPiPSupported(document.pictureInPictureEnabled || false);
  }, []);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleLoadStart = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('canplay', handleCanPlay);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  const togglePiP = async () => {
    if (!videoRef.current) return;

    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
      } else {
        await videoRef.current.requestPictureInPicture();
      }
    } catch (error) {
      toast({
        title: "PiP Error",
        description: "Picture-in-Picture mode is not supported",
        variant: "destructive",
      });
    }
  };

  const castToDevice = async () => {
    try {
      if ('presentation' in navigator && 'defaultRequest' in (navigator as any).presentation) {
        setIsCasting(true);
        toast({
          title: "Casting",
          description: "Looking for available devices...",
        });

        const presentationRequest = new (window as any).PresentationRequest([url]);
        const connection = await presentationRequest.start();
        
        connection.addEventListener('connect', () => {
          toast({
            title: "Connected",
            description: "Successfully connected to display device",
          });
        });

        connection.addEventListener('close', () => {
          setIsCasting(false);
          toast({
            title: "Disconnected",
            description: "Cast session ended",
          });
        });
      } else {
        toast({
          title: "Not Supported",
          description: "Casting is not available in your browser",
          variant: "destructive",
        });
      }
    } catch (error) {
      setIsCasting(false);
      toast({
        title: "Cast Error",
        description: "Failed to start casting session",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full mx-auto animate-fade-in">
      <Card className="w-full overflow-hidden shadow-2xl border border-blue-500/20 bg-gradient-to-br from-slate-900/90 via-blue-900/40 to-slate-900/90 backdrop-blur-xl hover:border-blue-500/40 transition-all duration-500">
        <CardContent className="p-6 space-y-6">
          {/* Header with Channel Info */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="flex items-start gap-4">
              {/* Channel Logo */}
              {channelLogo && (
                <div className="relative w-16 h-16 rounded-lg overflow-hidden shadow-lg border border-blue-500/20 flex-shrink-0">
                  <img 
                    src={channelLogo} 
                    alt={channelName}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              )}
              
              {/* Channel Details */}
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-bold text-white truncate">{channelName}</h2>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all ${
                    isPlaying 
                      ? 'bg-red-500/20 text-red-300' 
                      : 'bg-blue-500/20 text-blue-300'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-red-500' : 'bg-blue-500'} ${isPlaying ? 'animate-pulse' : ''}`} />
                    <span className="text-xs font-semibold">
                      {isPlaying ? '🔴 Live' : 'Ready'}
                    </span>
                  </div>
                  
                  {channelGroup && (
                    <Badge 
                      variant="outline" 
                      className="bg-slate-800/50 text-slate-300 border-slate-700/50 text-xs"
                    >
                      {channelGroup}
                    </Badge>
                  )}

                  {isLoading && (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-500/20 text-yellow-300">
                      <Loader size={14} className="animate-spin" />
                      <span className="text-xs font-semibold">Loading</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Control Buttons */}
            <MediaControls
              onClose={onClose}
              onPiP={togglePiP}
              onCast={castToDevice}
              isPiPSupported={isPiPSupported}
              isCasting={isCasting}
            />
          </div>

          {/* Video Player */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl ring-1 ring-blue-500/10">
            <VideoPlayer ref={videoRef} url={url} />
          </div>

          {/* Stream Info Footer */}
          <div className="flex items-center justify-between text-xs text-slate-400 px-3 py-3 rounded-lg bg-slate-800/30 border border-slate-700/30">
            <div className="flex items-center gap-2">
              <Info size={14} className="text-blue-400" />
              <span>Advanced Adaptive Streaming</span>
            </div>
            {isCasting && (
              <span className="text-blue-300 font-medium animate-pulse">Casting Active</span>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};