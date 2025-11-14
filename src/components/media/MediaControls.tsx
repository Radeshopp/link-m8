import React from 'react';
import { X, Cast, PictureInPicture, Volume2 } from 'lucide-react';
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
    <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/5 px-4 py-2.5 rounded-lg backdrop-blur-md border border-blue-500/20 hover:border-blue-500/40 transition-all">
      {isPiPSupported && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              onClick={onPiP}
              className="h-9 w-9 p-0 hover:bg-blue-500/20 hover:text-blue-300 text-slate-300 transition-all duration-200 group"
              title="Picture in Picture"
            >
              <PictureInPicture className="h-4 w-4 group-hover:scale-110 transition-transform" />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="bg-slate-900 border border-slate-700 text-white">
            <p className="text-xs font-medium">Picture in Picture</p>
          </TooltipContent>
        </Tooltip>
      )}

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            onClick={onCast}
            className={`h-9 w-9 p-0 transition-all duration-200 group ${
              isCasting 
                ? 'bg-cyan-500/30 text-cyan-300 border border-cyan-500/50' 
                : 'hover:bg-cyan-500/20 hover:text-cyan-300 text-slate-300'
            }`}
            title={isCasting ? "Casting..." : "Cast to device"}
          >
            <Cast className={`h-4 w-4 group-hover:scale-110 transition-transform ${isCasting ? 'animate-pulse' : ''}`} />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="bg-slate-900 border border-slate-700 text-white">
          <p className="text-xs font-medium">{isCasting ? "Casting..." : "Cast to device"}</p>
        </TooltipContent>
      </Tooltip>

      <div className="h-6 w-px bg-blue-500/20" />

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-9 w-9 p-0 hover:bg-red-500/20 hover:text-red-400 text-slate-300 transition-all duration-200 group"
            title="Close player"
          >
            <X className="h-4 w-4 group-hover:scale-110 transition-transform" />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="bg-slate-900 border border-slate-700 text-white">
          <p className="text-xs font-medium">Close player</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};