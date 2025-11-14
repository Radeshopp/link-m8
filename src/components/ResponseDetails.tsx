import { CheckResult } from "@/lib/checkLink";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Copy, CheckCircle2, AlertCircle, Clock, Zap, FileText } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

interface ResponseDetailsProps {
  result: CheckResult;
  onPlay?: (url: string) => void;
}

export const ResponseDetails = ({ result, onPlay }: ResponseDetailsProps) => {
  const [copied, setCopied] = useState(false);
  
  const isSuccess = result.status >= 200 && result.status < 300;
  const isError = result.status >= 400 || result.status === 0;
  const isWarning = result.status >= 300 && result.status < 400;

  // Extended format support for playback
  const isPlayable = () => {
    const urlLower = result.url.toLowerCase();
    
    // HLS/DASH streams
    if (urlLower.includes('.m3u8') || urlLower.includes('.m3u') || urlLower.includes('.mpd')) {
      return true;
    }
    
    // Video formats
    const videoFormats = ['.mp4', '.webm', '.ogv', '.mov', '.flv', '.avi', '.mkv', '.ts', '.mts', '.m2ts'];
    if (videoFormats.some(fmt => urlLower.includes(fmt))) {
      return true;
    }
    
    // Audio formats
    const audioFormats = ['.mp3', '.aac', '.wav', '.ogg', '.flac', '.wma', '.opus'];
    if (audioFormats.some(fmt => urlLower.includes(fmt))) {
      return true;
    }
    
    // Generic streaming URLs without extensions (like Twitch, etc)
    if (urlLower.includes('stream') || urlLower.includes('live') || urlLower.includes('channel')) {
      return isSuccess; // Only if successful
    }
    
    return false;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getStatusBgColor = () => {
    if (isSuccess) return "from-green-900/20 to-emerald-900/20 border-green-500/40";
    if (isError) return "from-red-900/20 to-rose-900/20 border-red-500/40";
    return "from-yellow-900/20 to-orange-900/20 border-yellow-500/40";
  };

  const getStatusBarColor = () => {
    if (isSuccess) return "bg-gradient-to-b from-green-400 to-emerald-500";
    if (isError) return "bg-gradient-to-b from-red-400 to-rose-500";
    return "bg-gradient-to-b from-yellow-400 to-orange-500";
  };

  const getStatusIcon = () => {
    if (isSuccess) return <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 animate-pulse" />;
    if (isError) return <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />;
    return <Clock className="h-5 w-5 text-yellow-400 flex-shrink-0" />;
  };

  return (
    <Card className={`group relative overflow-hidden border transition-all duration-300 hover:shadow-lg ${getStatusBgColor()}`}>
      {/* Animated Status Bar */}
      <div className={`absolute top-0 left-0 w-1 h-full ${getStatusBarColor()}`}></div>

      {/* Card Header */}
      <CardHeader className="pb-3 pl-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          {/* URL and Status Icon */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            {getStatusIcon()}
            
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-slate-300 mb-1">Streaming Link</p>
              <p className="text-sm font-mono break-all text-slate-100 group-hover:text-blue-300 transition-colors">{result.url}</p>
            </div>
          </div>

          {/* Action Buttons and Status */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {isPlayable() && isSuccess && onPlay && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onPlay(result.url)}
                className="h-9 px-3 hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-200 hover:scale-110 group/btn"
                title="Play media"
              >
                <Play className="h-4 w-4 mr-1.5" />
                <span className="text-xs font-medium">Play</span>
              </Button>
            )}
            
            <Button
              variant="ghost"
              size="sm"
              onClick={copyToClipboard}
              className="h-9 px-3 hover:bg-slate-700/50 hover:text-slate-300 transition-all duration-200"
              title="Copy URL"
            >
              <Copy className="h-4 w-4" />
            </Button>

            <Badge 
              variant="outline"
              className={`text-xs font-bold whitespace-nowrap px-3 py-1 ${
                isSuccess
                  ? "bg-green-500/20 text-green-300 border-green-500/50"
                  : isError
                  ? "bg-red-500/20 text-red-300 border-red-500/50"
                  : "bg-yellow-500/20 text-yellow-300 border-yellow-500/50"
              }`}
            >
              {result.status || "ERROR"}
            </Badge>
          </div>
        </div>
      </CardHeader>

      {/* Card Content */}
      <CardContent className="py-4 space-y-3 px-6">
        {/* Response Time */}
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-800/70 transition-all duration-200 border border-slate-600/40">
          <Zap className="h-4 w-4 text-yellow-400 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-xs text-slate-300 font-medium">Response Time</p>
            <p className="font-semibold text-slate-100">{result.responseTime}ms</p>
          </div>
        </div>

        {/* Error Message or Headers */}
        {result.error ? (
          <div className="px-3 py-3 rounded-lg bg-red-500/10 border border-red-500/20">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="h-4 w-4 text-red-400" />
              <p className="text-xs font-semibold text-red-300">Error Details</p>
            </div>
            <p className="text-sm text-red-200 font-mono break-all">{result.error}</p>
          </div>
        ) : (
          <div className="px-3 py-3 rounded-lg bg-slate-800/60 border border-slate-600/40 max-h-48 overflow-y-auto">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="h-4 w-4 text-blue-400" />
              <p className="text-xs font-semibold text-slate-200">Response Headers</p>
            </div>
            <div className="space-y-1.5">
              {Object.entries(result.headers).slice(0, 5).map(([key, value]) => (
                <div key={key} className="text-xs">
                  <span className="text-blue-300 font-mono font-semibold">{key}:</span>{" "}
                  <span className="text-slate-300 break-all">{String(value).substring(0, 60)}</span>
                </div>
              ))}
              {Object.entries(result.headers).length > 5 && (
                <p className="text-xs text-slate-400 italic pt-1.5 border-t border-slate-600/40">+{Object.entries(result.headers).length - 5} more headers</p>
              )}
            </div>
          </div>
        )}
      </CardContent>

      {/* Copy Feedback */}
      {copied && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm rounded-lg animate-fade-in">
          <div className="flex items-center gap-2 bg-green-500/20 border border-green-500/50 px-4 py-2 rounded-lg">
            <CheckCircle2 className="h-5 w-5 text-green-400" />
            <span className="text-green-300 font-semibold">Copied to clipboard!</span>
          </div>
        </div>
      )}
    </Card>
  );
};