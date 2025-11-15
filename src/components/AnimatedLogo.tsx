export const AnimatedLogo = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="relative w-10 h-10">
        {/* Outer rotating circle */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg opacity-75 animate-spin" style={{
          animationDuration: '3s'
        }}></div>
        
        {/* Inner circle with icon */}
        <div className="absolute inset-1 bg-gradient-to-br from-slate-900 to-slate-800 rounded-md flex items-center justify-center">
          {/* Central rotating element */}
          <div className="relative w-6 h-6">
            <svg
              className="absolute inset-0 w-full h-full text-cyan-400 animate-pulse"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            
            {/* Rotating dots around center */}
            <div className="absolute inset-0 animate-spin" style={{
              animationDuration: '4s',
              animationDirection: 'reverse'
            }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-gradient-to-b from-blue-400 to-transparent rounded-full"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-gradient-to-l from-cyan-400 to-transparent rounded-full"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-gradient-to-t from-blue-400 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <span className="text-lg font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text leading-tight">
          M3U8
        </span>
        <span className="text-xs font-semibold text-cyan-300 tracking-wider">
          Check
        </span>
      </div>
    </div>
  );
};
