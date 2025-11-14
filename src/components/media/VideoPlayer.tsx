import React, { forwardRef, useEffect } from 'react';
import Hls from 'hls.js';
import { useToast } from '@/components/ui/use-toast';

interface VideoPlayerProps {
  url: string;
  onError?: (error: string) => void;
}

// Comprehensive format support list
const SUPPORTED_FORMATS = {
  hls: ['.m3u8', '.m3u'],
  dash: ['.mpd'],
  video: ['.mp4', '.webm', '.ogv', '.mov', '.flv', '.avi', '.mkv', '.ts', '.mts', '.m2ts'],
  audio: ['.mp3', '.aac', '.wav', '.ogg', '.flac', '.wma', '.opus'],
};

export const VideoPlayer = forwardRef<HTMLVideoElement, VideoPlayerProps>(({ url, onError }, ref) => {
  const { toast } = useToast();

  useEffect(() => {
    const video = ref as React.MutableRefObject<HTMLVideoElement>;
    if (!video.current) return;

    const initPlayer = () => {
      const urlLower = url.toLowerCase();
      
      // Format detection
      const isHLS = SUPPORTED_FORMATS.hls.some(ext => urlLower.includes(ext));
      const isDASH = SUPPORTED_FORMATS.dash.some(ext => urlLower.includes(ext));
      const isVideo = SUPPORTED_FORMATS.video.some(ext => urlLower.includes(ext));
      const isAudio = SUPPORTED_FORMATS.audio.some(ext => urlLower.includes(ext));

      const handleError = (errorMsg: string) => {
        onError?.(errorMsg);
        toast({
          title: "Playback Error",
          description: errorMsg,
          variant: "destructive",
        });
      };

      // HLS Stream Handler
      if (isHLS && Hls.isSupported()) {
        const hls = new Hls({
          enableWorker: true,
          lowLatencyMode: true,
          backBufferLength: 90,
        });

        hls.loadSource(url);
        hls.attachMedia(video.current);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.current.play().catch(() => {
            // Autoplay failed, user can click to play
            console.warn('Autoplay prevented by browser');
          });
        });

        hls.on(Hls.Events.ERROR, (event, data) => {
          if (data.fatal) {
            handleError(`Stream error: ${data.details}`);
            hls.destroy();
          }
        });

        return () => hls.destroy();
      }

      // DASH Stream Handler
      if (isDASH) {
        video.current.src = url;
        video.current.type = 'application/dash+xml';
      }
      // Standard Video Formats
      else if (isVideo) {
        video.current.src = url;
        const ext = SUPPORTED_FORMATS.video.find(ext => urlLower.includes(ext)) || '.mp4';
        video.current.type = `video/${ext.substring(1)}`;
      }
      // Audio Formats
      else if (isAudio) {
        video.current.src = url;
        const ext = SUPPORTED_FORMATS.audio.find(ext => urlLower.includes(ext)) || '.mp3';
        video.current.type = `audio/${ext.substring(1)}`;
      }
      // Generic Fallback
      else {
        video.current.src = url;
      }

      const handleCanPlay = () => {
        video.current.play().catch(err => {
          console.warn('Playback warning:', err);
        });
      };

      const handleError_Event = () => {
        handleError('Failed to load stream. Please verify the URL.');
      };

      video.current.addEventListener('canplay', handleCanPlay);
      video.current.addEventListener('error', handleError_Event);

      return () => {
        video.current?.removeEventListener('canplay', handleCanPlay);
        video.current?.removeEventListener('error', handleError_Event);
      };
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
    <div className="relative w-full bg-black aspect-video shadow-2xl transition-all duration-300 group rounded-lg overflow-hidden">
      <video
        ref={ref}
        className="w-full h-full"
        controls
        playsInline
        controlsList="nodownload"
        crossOrigin="anonymous"
      >
        Your browser does not support video playback.
      </video>
      <div className="absolute inset-0 rounded-lg pointer-events-none ring-1 ring-white/10 group-hover:ring-blue-500/30 transition-all" />
    </div>
  );
});

VideoPlayer.displayName = 'VideoPlayer';