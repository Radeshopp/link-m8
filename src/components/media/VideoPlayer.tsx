import React, { forwardRef, useEffect } from 'react';
import Hls from 'hls.js';
import { useToast } from '@/components/ui/use-toast';

interface VideoPlayerProps {
  url: string;
  onError?: (error: string) => void;
}

export const VideoPlayer = forwardRef<HTMLVideoElement, VideoPlayerProps>(({ url, onError }, ref) => {
  const { toast } = useToast();

  useEffect(() => {
    const video = ref as React.MutableRefObject<HTMLVideoElement>;
    if (!video.current) return;

    const initPlayer = () => {
      const isHLS = url.toLowerCase().includes('.m3u8');
      const isTS = url.toLowerCase().includes('.ts');
      
      if ((isHLS || isTS) && Hls.isSupported()) {
        const hls = new Hls({
          enableWorker: true,
          lowLatencyMode: true,
          backBufferLength: 90,
        });

        hls.loadSource(url);
        hls.attachMedia(video.current);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.current.play().catch(() => {
            toast({
              title: "Playback Error",
              description: "Unable to autoplay video. Please click play.",
              variant: "destructive",
            });
          });
        });

        hls.on(Hls.Events.ERROR, (event, data) => {
          if (data.fatal) {
            onError?.(data.details);
            toast({
              title: "Stream Error",
              description: "Failed to load the stream. Please try again.",
              variant: "destructive",
            });
            hls.destroy();
          }
        });

        return () => hls.destroy();
      } else if (video.current.canPlayType('application/vnd.apple.mpegurl')) {
        video.current.src = url;
        video.current.addEventListener('loadedmetadata', () => {
          video.current.play().catch(console.error);
        });
      } else {
        video.current.src = url;
        video.current.play().catch(console.error);
      }
    };

    const cleanup = initPlayer();
    return () => {
      cleanup?.();
      if (video.current) {
        video.current.removeAttribute('src');
        video.current.load();
      }
    };
  }, [url, ref, onError, toast]);

  return (
    <div className="relative rounded-2xl overflow-hidden bg-black aspect-video shadow-2xl transition-all duration-300 hover:shadow-primary/20 hover:shadow-2xl group">
      <video
        ref={ref}
        className="w-full h-full"
        controls
        playsInline
        controlsList="nodownload"
      >
        Your browser does not support video playback.
      </video>
      <div className="absolute inset-0 rounded-2xl pointer-events-none ring-1 ring-white/10 group-hover:ring-primary/30 transition-all" />
    </div>
  );
});

VideoPlayer.displayName = 'VideoPlayer';