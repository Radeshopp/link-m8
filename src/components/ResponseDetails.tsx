import { CheckResult } from "@/lib/checkLink";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Copy, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { useState } from "react";

interface ResponseDetailsProps {
  result: CheckResult;
  onPlay?: (url: string) => void;
}

export const ResponseDetails = ({ result, onPlay }: ResponseDetailsProps) => {
  const [copied, setCopied] = useState(false);
  
  const isSuccess = result.status >= 200 && result.status < 300;
  const isError = result.status >= 400 || result.status === 0;

  const isPlayable = result.url.toLowerCase().includes('.m3u8') || 
                     result.url.toLowerCase().includes('.mp4') ||
                     result.url.toLowerCase().includes('.mp3');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="mb-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 border-slate-700 hover:from-slate-800/70 hover:to-slate-900/70 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 overflow-hidden group">
      {/* Status Indicator */}
      <div className={`absolute top-0 left-0 w-1 h-full transition-colors duration-300 ${
        isSuccess ? "bg-gradient-to-b from-green-400 to-emerald-500" : 
        isError ? "bg-gradient-to-b from-red-400 to-rose-500" : 
        "bg-gradient-to-b from-yellow-400 to-orange-500"
      }`}></div>

      <CardHeader className="py-4 pl-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            {isSuccess ? (
              <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 animate-pulse" />
            ) : isError ? (
              <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
            ) : (
              <Clock className="h-5 w-5 text-yellow-400 flex-shrink-0" />
            )}
            
            <p className="text-sm font-mono break-all text-slate-200 group-hover:text-white transition-colors">{result.url}</p>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            {isPlayable && isSuccess && onPlay && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onPlay(result.url)}
                className="h-8 w-8 p-0 hover:bg-purple-500/20 hover:text-purple-400 transition-colors"
                title="Play media"
              >
                <Play className="h-4 w-4" />
              </Button>
            )}
            
            <Button
              variant="ghost"
              size="sm"
              onClick={copyToClipboard}
              className="h-8 px-2 hover:bg-blue-500/20 hover:text-blue-400 transition-colors text-xs"
              title="Copy URL"
            >
              <Copy className="h-4 w-4" />
            </Button>

            <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
              isSuccess
                ? "bg-green-500/20 text-green-300 border border-green-500/30"
                : isError
                ? "bg-red-500/20 text-red-300 border border-red-500/30"
                : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
            }`}>
              {result.status || "ERR"}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="py-4 space-y-3">
        {/* Response Time */}
        <div className="flex items-center gap-3 px-2 py-2 rounded-lg bg-slate-900/50 hover:bg-slate-800/50 transition-colors">
          <Clock className="h-4 w-4 text-blue-400 flex-shrink-0" />
          <div>
            <p className="text-xs text-slate-400">Response Time</p>
            <p className="font-semibold text-slate-200">{result.responseTime}ms</p>
          </div>
        </div>

        {/* Error Message or Headers */}
        {result.error ? (
          <div className="px-2 py-2 rounded-lg bg-red-500/10 border border-red-500/20">
            <p className="text-xs text-slate-400 mb-1">Error Details</p>
            <p className="text-sm text-red-300 font-mono break-all">{result.error}</p>
          </div>
        ) : (
          <div className="px-2 py-2 rounded-lg bg-slate-900/50 max-h-40 overflow-y-auto">
            <p className="text-xs text-slate-400 mb-2 font-semibold">Response Headers</p>
            <div className="space-y-1">
              {Object.entries(result.headers).slice(0, 5).map(([key, value]) => (
                <div key={key} className="text-xs">
                  <span className="text-blue-300 font-mono">{key}:</span>{" "}
                  <span className="text-slate-400 truncate inline-block max-w-xs">{String(value).substring(0, 50)}</span>
                </div>
              ))}
              {Object.entries(result.headers).length > 5 && (
                <p className="text-xs text-slate-500 italic">+{Object.entries(result.headers).length - 5} more headers</p>
              )}
            </div>
          </div>
        )}
      </CardContent>

      {copied && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-lg">
          <span className="text-green-400 font-semibold">Copied!</span>
        </div>
      )}
    </Card>
  );
};