import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Tv2, Play } from "lucide-react";
import { Channel } from "@/types/channel";

interface ChannelListProps {
  channels: Channel[];
  onChannelSelect: (channel: Channel) => void;
  currentUrl?: string;
}

export const ChannelList = ({ channels, onChannelSelect, currentUrl }: ChannelListProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Group channels by their group property
  const groupedChannels = channels.reduce((acc, channel) => {
    const group = channel.group || "General";
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(channel);
    return acc;
  }, {} as Record<string, Channel[]>);

  // Filter channels based on search query
  const filteredGroups = Object.entries(groupedChannels).reduce(
    (acc, [group, channels]) => {
      const filteredChannels = channels.filter((channel) =>
        channel.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (filteredChannels.length > 0) {
        acc[group] = filteredChannels;
      }
      return acc;
    },
    {} as Record<string, Channel[]>
  );

  const totalChannels = Object.values(filteredGroups).reduce((sum, ch) => sum + ch.length, 0);

  return (
    <div className="flex flex-col h-full gap-3">
      {/* Search Bar */}
      <div className="sticky top-0 z-10 flex items-center gap-2 px-3 py-2 bg-slate-900/50 rounded-lg border border-blue-500/20">
        <Search className="w-4 h-4 text-blue-400 flex-shrink-0" />
        <Input
          type="search"
          placeholder="Search channels..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="h-8 border-0 bg-transparent text-white placeholder-slate-500 focus-visible:ring-0"
        />
      </div>

      {/* Channels List */}
      <ScrollArea className="flex-1">
        {totalChannels > 0 ? (
          <div className="space-y-4 pr-4">
            {Object.entries(filteredGroups).map(([group, groupChannels]) => (
              <div key={group} className="space-y-2">
                {/* Group Header */}
                <div className="sticky top-0 bg-gradient-to-r from-slate-900/80 to-slate-900/60 px-3 py-2 rounded border-l-2 border-blue-500">
                  <h3 className="text-xs font-bold text-blue-300 uppercase tracking-wider">
                    {group}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">{groupChannels.length} channels</p>
                </div>

                {/* Channels */}
                <div className="space-y-1.5">
                  {groupChannels.map((channel) => {
                    const isActive = currentUrl === channel.url;
                    return (
                      <button
                        key={channel.url}
                        onClick={() => onChannelSelect(channel)}
                        className={`w-full group relative px-3 py-2.5 rounded-lg transition-all duration-200 flex items-center gap-3 text-left overflow-hidden ${
                          isActive
                            ? 'bg-gradient-to-r from-blue-600/40 to-cyan-600/20 border border-blue-500/60 shadow-lg shadow-blue-500/20'
                            : 'bg-slate-800/30 border border-slate-700/30 hover:border-blue-500/40 hover:bg-slate-800/50'
                        }`}
                      >
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all" />

                        {/* Channel Logo or Icon */}
                        <div className="relative w-8 h-8 rounded flex items-center justify-center bg-slate-700/50 group-hover:bg-slate-700 flex-shrink-0 overflow-hidden border border-slate-600/50">
                          {channel.logo ? (
                            <img
                              src={channel.logo}
                              alt={channel.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          ) : (
                            <Tv2 className="w-4 h-4 text-slate-400" />
                          )}
                        </div>

                        {/* Channel Name */}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white truncate group-hover:text-blue-300 transition-colors">
                            {channel.name}
                          </p>
                        </div>

                        {/* Play Indicator */}
                        {isActive ? (
                          <Play className="w-4 h-4 text-blue-400 fill-blue-400 flex-shrink-0 animate-pulse" />
                        ) : (
                          <Play className="w-4 h-4 text-slate-600 flex-shrink-0 group-hover:text-slate-400 transition-colors opacity-0 group-hover:opacity-100" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-40 text-center">
            <Search className="w-8 h-8 text-slate-600 mb-2" />
            <p className="text-slate-400 text-sm">No channels found</p>
          </div>
        )}
      </ScrollArea>
    </div>
  );
};