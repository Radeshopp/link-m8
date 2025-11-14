import { LinkChecker } from "@/components/LinkChecker";
import { CheckCircle2, Zap, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 min-h-screen py-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-6">
              <div className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/50 backdrop-blur-sm">
                <span className="text-sm font-semibold text-purple-300 flex items-center gap-2">
                  <Zap size={14} /> Advanced Link Checker
                </span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6 leading-tight">
              M3U8 Link Checker
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Verify the status and accessibility of your M3U8 streaming links with advanced analytics and real-time monitoring
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
                <CheckCircle2 size={18} className="text-green-400" />
                <span className="text-slate-300 text-sm">Fast Verification</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
                <Shield size={18} className="text-blue-400" />
                <span className="text-slate-300 text-sm">Secure & Private</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
                <Zap size={18} className="text-yellow-400" />
                <span className="text-slate-300 text-sm">Real-time Results</span>
              </div>
            </div>
          </div>

          {/* Main Component */}
          <div className="animate-fade-in-up">
            <LinkChecker />
          </div>

          {/* Footer Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-colors">
              <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-2">10k+</div>
              <p className="text-slate-400">Links Verified</p>
            </div>
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-colors">
              <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">99.9%</div>
              <p className="text-slate-400">Accuracy Rate</p>
            </div>
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-colors">
              <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text mb-2">24/7</div>
              <p className="text-slate-400">Always Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;