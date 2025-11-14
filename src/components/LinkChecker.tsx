import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { CheckResult, checkMultipleLinks } from "@/lib/checkLink";
import { ResponseDetails } from "./ResponseDetails";
import { Channel } from "@/types/channel";
import { PlaylistView } from "./playlist/PlaylistView";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Link as LinkIcon, Zap, Check, X } from "lucide-react";
import { parseM3U } from "@/lib/m3uParser";
import { MediaPlayer } from "@/components/MediaPlayer";
import { Progress } from "@/components/ui/progress";

export const LinkChecker = () => {
  const [urls, setUrls] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [results, setResults] = useState<CheckResult[]>([]);
  const [playingUrl, setPlayingUrl] = useState<string | null>(null);
  const [playingChannel, setPlayingChannel] = useState<Channel | null>(null);
  const [channels, setChannels] = useState<Channel[]>([]);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const handleCheck = async () => {
    if (!urls.trim()) {
      toast({
        title: "Input Required",
        description: "Please enter at least one URL or M3U playlist link",
        variant: "destructive",
      });
      return;
    }

    const linkList = urls
      .split("\n")
      .map((url) => url.trim())
      .filter((url) => url);

    try {
      setIsChecking(true);
      setProgress(0);
      
      // Check if the input is an M3U playlist
      if (linkList[0].toLowerCase().endsWith('.m3u') || linkList[0].toLowerCase().endsWith('.m3u8')) {
        const parsedChannels = await parseM3U(linkList[0]);
        setChannels(parsedChannels);
        if (parsedChannels.length > 0) {
          toast({
            title: "Playlist Loaded Successfully",
            description: `Found ${parsedChannels.length} channels in the playlist`,
          });
        }
      }
      
      const totalLinks = linkList.length;
      let completedLinks = 0;
      
      const checkResults = [];
      for (const url of linkList) {
        const result = await checkMultipleLinks([url]);
        checkResults.push(...result);
        completedLinks++;
        setProgress(Math.round((completedLinks / totalLinks) * 100));
      }
      
      setResults(checkResults);

      const workingCount = checkResults.filter(r => r.isWorking).length;
      toast({
        title: "Check Complete",
        description: `${workingCount} of ${checkResults.length} links are working`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to check links. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsChecking(false);
      setProgress(0);
    }
  };

  const workingLinks = results.filter((r) => r.isWorking);
  const nonWorkingLinks = results.filter((r) => !r.isWorking);

  const downloadWorkingLinks = () => {
    const content = workingLinks.map((r) => r.url).join("\n");
    const blob = new Blob([content], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "working-links.txt";
    a.click();
    window.URL.revokeObjectURL(url);

    toast({
      title: "Download Complete",
      description: "Working links exported successfully",
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Input Card */}
      <Card className="border-2 border-blue-500/40 bg-gradient-to-br from-slate-800/60 via-slate-800/50 to-slate-900/60 backdrop-blur-md hover:border-blue-400/60 transition-all duration-300 shadow-2xl hover:shadow-blue-500/20 animate-fade-in">
        <CardHeader className="pb-4 border-b border-blue-500/30 bg-gradient-to-r from-blue-500/10 to-cyan-500/5">
          <CardTitle className="flex items-center gap-3 text-2xl text-white font-bold">
            <div className="p-2.5 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-lg border border-blue-500/40">
              <LinkIcon className="h-6 w-6 text-blue-300" />
            </div>
            <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">Stream Link Checker</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <Textarea
              placeholder={`Paste your streaming links here (one per line)

Examples:
https://example.com/playlist.m3u8
https://example.com/stream.mp4
https://example.com/playlist.m3u

Or paste a complete M3U playlist URL to load all channels`}
              value={urls}
              onChange={(e) => setUrls(e.target.value)}
              className="min-h-[180px] font-mono text-sm bg-slate-900/70 border-2 border-blue-500/30 hover:border-blue-500/50 text-white placeholder-slate-400 rounded-lg p-4 focus:border-blue-500/70 focus:ring-2 focus:ring-blue-500/20 transition-all"
            />

            {/* Progress Bar */}
            {isChecking && (
              <div className="w-full space-y-3">
                <Progress 
                  value={progress} 
                  className="h-2.5 w-full bg-slate-700/30"
                />
                <p className="text-sm text-slate-400 text-center font-medium">
                  <Zap className="inline-block mr-1 h-4 w-4 text-yellow-400" />
                  Verifying links... {progress}%
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-between pt-2">
              <Button
                onClick={handleCheck}
                disabled={isChecking}
                className="w-full sm:w-auto min-w-[140px] bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold shadow-lg hover:shadow-blue-500/50 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isChecking ? (
                  <>
                    <Zap className="mr-2 h-4 w-4 animate-spin" />
                    Checking...
                  </>
                ) : (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Check Links
                  </>
                )}
              </Button>

              {workingLinks.length > 0 && (
                <Button
                  variant="outline"
                  onClick={downloadWorkingLinks}
                  className="w-full sm:w-auto border-2 border-blue-500/50 bg-blue-950/40 text-blue-200 hover:bg-blue-900/60 hover:border-blue-400/70 hover:text-blue-100 transition-all duration-300 font-medium"
                >
                  <Download size={16} className="mr-2" />
                  Export Working Links
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Playlist View - For M3U playlists */}
      {channels.length > 0 && (
        <PlaylistView
          channels={channels}
          playingUrl={playingUrl}
          onChannelSelect={(channel) => {
            setPlayingUrl(channel.url);
            setPlayingChannel(channel);
          }}
          onClose={() => {
            setPlayingUrl(null);
            setPlayingChannel(null);
          }}
        />
      )}

      {/* Results Section */}
      {results.length > 0 && !channels.length && (
        <div className="space-y-6 animate-fade-in-up">
          {/* Media Player */}
          {playingUrl && (
            <MediaPlayer 
              url={playingUrl} 
              onClose={() => {
                setPlayingUrl(null);
                setPlayingChannel(null);
              }}
            />
          )}

          {/* Results Tabs */}
          <Tabs defaultValue="working" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-slate-800/70 border-2 border-slate-700/60 p-1 rounded-lg backdrop-blur-sm">
              <TabsTrigger 
                value="working"
                className="flex items-center gap-2 text-slate-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600/40 data-[state=active]:to-emerald-600/40 data-[state=active]:text-green-200 data-[state=active]:border data-[state=active]:border-green-500/50 rounded transition-all font-medium"
              >
                <Check className="h-4 w-4" />
                Working ({workingLinks.length})
              </TabsTrigger>
              <TabsTrigger 
                value="non-working"
                className="flex items-center gap-2 text-slate-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600/40 data-[state=active]:to-orange-600/40 data-[state=active]:text-red-200 data-[state=active]:border data-[state=active]:border-red-500/50 rounded transition-all font-medium"
              >
                <X className="h-4 w-4" />
                Broken ({nonWorkingLinks.length})
              </TabsTrigger>
            </TabsList>

            {/* Working Links Tab */}
            <TabsContent value="working" className="mt-6">
              {workingLinks.length > 0 ? (
                <Card className="border-2 border-green-500/40 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      {workingLinks.map((result, index) => (
                        <div key={index} className="group">
                          <ResponseDetails 
                            result={result} 
                            onPlay={setPlayingUrl}
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-2 border-slate-700/50 bg-gradient-to-br from-slate-800/40 to-slate-900/40">
                  <CardContent className="pt-6 text-center text-slate-300">
                    No working links found
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Non-Working Links Tab */}
            <TabsContent value="non-working" className="mt-6">
              {nonWorkingLinks.length > 0 ? (
                <Card className="border-2 border-red-500/40 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      {nonWorkingLinks.map((result, index) => (
                        <ResponseDetails 
                          key={index} 
                          result={result}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-2 border-slate-700/50 bg-gradient-to-br from-slate-800/40 to-slate-900/40">
                  <CardContent className="pt-6 text-center text-slate-300">
                    No broken links
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <Card className="border-2 border-green-500/40 bg-gradient-to-br from-green-900/20 to-emerald-900/20">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-300 mb-2">{workingLinks.length}</div>
                  <p className="text-slate-300 text-sm">Working Links</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-500/40 bg-gradient-to-br from-red-900/20 to-orange-900/20">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-300 mb-2">{nonWorkingLinks.length}</div>
                  <p className="text-slate-300 text-sm">Broken Links</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500/40 bg-gradient-to-br from-blue-900/20 to-cyan-900/20">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300 mb-2">
                    {Math.round((workingLinks.length / results.length) * 100)}%
                  </div>
                  <p className="text-slate-300 text-sm">Success Rate</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};