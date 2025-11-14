import React, { useRef, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { useToast } from './ui/use-toast';
import { MediaControls } from './media/MediaControls';
import { VideoPlayer } from './media/VideoPlayer';
import { useScreenOrientation } from './media/useScreenOrientation';
import { Badge } from './ui/badge';
import { Volume2 } from 'lucide-react';

interface MediaPlayerProps {
  url: string;
  onClose: () => void;
}

export const MediaPlayer = ({ url, onClose }: MediaPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { toast } = useToast();
  const [isPiPSupported, setIsPiPSupported] = useState(false);
  const [isCasting, setIsCasting] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useScreenOrientation(videoRef.current);

  React.useEffect(() => {
    setIsPiPSupported(document.pictureInPictureEnabled || false);
  }, []);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
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
        description: "Failed to enter picture-in-picture mode",
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
          description: "Casting is not supported in this browser",
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
      <Card className="w-full overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900/80 backdrop-blur-xl hover:border-primary/20 transition-all duration-500">
        <CardContent className="p-6 space-y-4">
          {/* Header Section */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className={`h-3 w-3 rounded-full ${isPlaying ? 'bg-red-500 animate-pulse' : 'bg-primary'}`} />
                <div className={`absolute inset-0 h-3 w-3 rounded-full ${isPlaying ? 'bg-red-500' : 'bg-primary'} animate-ping opacity-75`} />
              </div>
              <div className="flex items-center gap-2">
                <Volume2 className="h-4 w-4 text-primary" />
                <Badge 
                  variant="outline" 
                  className="bg-gradient-to-r from-primary/20 to-blue-500/20 text-primary border-primary/40 font-medium"
                >
                  {isPlaying ? '🔴 Live' : 'Ready to Play'}
                </Badge>
              </div>
            </div>
            <MediaControls
              onClose={onClose}
              onPiP={togglePiP}
              onCast={castToDevice}
              isPiPSupported={isPiPSupported}
              isCasting={isCasting}
            />
          </div>

          {/* Video Player */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <VideoPlayer ref={videoRef} url={url} />
          </div>

          {/* Footer Info */}
          <div className="flex items-center justify-between text-xs text-muted-foreground px-2">
            <span>Adaptive Streaming</span>
            {isCasting && (
              <span className="text-primary font-medium animate-pulse">Casting Active</span>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};