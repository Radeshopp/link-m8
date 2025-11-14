import React from 'react';
import { X, Cast, PictureInPicture, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip';

interface MediaControlsProps {
  onClose: () => void;
  onPiP: () => void;
  onCast: () => void;
  isPiPSupported: boolean;
  isCasting: boolean;
}

export const MediaControls = ({
  onClose,
  onPiP,
  onCast,
  isPiPSupported,
  isCasting,
}: MediaControlsProps) => {
  return (
    <div className="flex items-center gap-1.5 bg-gradient-to-r from-primary/10 to-transparent px-3 py-2 rounded-lg backdrop-blur-sm border border-primary/20">
      {isPiPSupported && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              onClick={onPiP}
              className="hover:bg-primary/20 hover:text-primary transition-all duration-200 text-white/70"
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Picture in Picture</p>
          </TooltipContent>
        </Tooltip>
      )}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            onClick={onCast}
            className={`transition-all duration-200 ${isCasting ? 'bg-primary/30 text-primary' : 'hover:bg-primary/20 hover:text-primary text-white/70'}`}
            disabled={isCasting}
          >
            <Cast className={`h-4 w-4 ${isCasting ? 'animate-pulse' : ''}`} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{isCasting ? "Casting..." : "Cast to device"}</p>
        </TooltipContent>
      </Tooltip>
      <div className="h-6 w-px bg-white/10" />
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="hover:bg-destructive/20 hover:text-destructive transition-all duration-200 text-white/70"
          >
            <X className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Close player</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};