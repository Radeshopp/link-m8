import { Card } from "@/components/ui/card";
import { MediaPlayer } from "@/components/MediaPlayer";
import { ChannelList } from "./ChannelList";
import { Channel } from "@/types/channel";

interface PlaylistViewProps {
  channels: Channel[];
  playingUrl: string | null;
  onChannelSelect: (channel: Channel) => void;
  onClose: () => void;
}

export const PlaylistView = ({ channels, playingUrl, onChannelSelect, onClose }: PlaylistViewProps) => {
  const playingChannel = channels.find(ch => ch.url === playingUrl);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 max-w-full mx-auto animate-fade-in">
      {/* Main Player Section */}
      <div className="lg:col-span-2 space-y-4">
        {playingUrl ? (
          <MediaPlayer 
            url={playingUrl} 
            channelName={playingChannel?.name}
            channelLogo={playingChannel?.logo}
            channelGroup={playingChannel?.group}
            onClose={onClose} 
          />
        ) : (
          <Card className="border border-blue-500/20 bg-gradient-to-br from-slate-800/30 to-slate-800/20 backdrop-blur-sm p-12 flex items-center justify-center h-96">
            <div className="text-center">
              <div className="text-5xl mb-4">📺</div>
              <p className="text-slate-400 text-lg">Select a channel to start watching</p>
            </div>
          </Card>
        )}
      </div>

      {/* Channels Sidebar */}
      <div className="lg:col-span-1">
        <Card className="border border-blue-500/20 bg-gradient-to-br from-slate-800/40 to-slate-800/20 backdrop-blur-sm shadow-lg h-full max-h-[600px] lg:max-h-[calc(100vh-2rem)] overflow-hidden flex flex-col">
          <div className="p-4 border-b border-blue-500/10">
            <h3 className="font-bold text-white text-lg">Playlist ({channels.length})</h3>
            <p className="text-xs text-slate-400 mt-1">Channels available</p>
          </div>
          <div className="flex-1 overflow-y-auto">
            <ChannelList
              channels={channels}
              onChannelSelect={onChannelSelect}
              currentUrl={playingUrl || undefined}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};