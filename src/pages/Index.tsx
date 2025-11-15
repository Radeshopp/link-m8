import { useState } from "react";
import { LinkChecker } from "@/components/LinkChecker";
import { DonateDialog } from "@/components/DonateDialog";
import { Footer } from "@/components/Footer";
import { AnimatedLogo } from "@/components/AnimatedLogo";
import { CheckCircle2, Zap, Shield, Radio, Play, BarChart3, Heart } from "lucide-react";

const Index = () => {
  const [donateDialogOpen, setDonateDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-x-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Primary gradient blob */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500 via-cyan-400 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        
        {/* Secondary gradient blob */}
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-br from-purple-500 via-violet-400 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        
        {/* Tertiary gradient blob */}
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-br from-indigo-500 via-blue-400 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
      </div>

      <div className="relative z-10 min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex flex-col">
        <div className="max-w-7xl mx-auto w-full flex-1">
          {/* Header with Logo and Donate Button */}
          <div className="flex justify-between items-center mb-12">
            <AnimatedLogo />
            <button
              onClick={() => setDonateDialogOpen(true)}
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/50 backdrop-blur-md hover:border-red-400/70 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
            >
              <Heart size={18} className="text-red-400 group-hover:fill-red-400 transition-colors" />
              <span className="text-sm font-semibold text-transparent bg-gradient-to-r from-red-300 to-pink-300 bg-clip-text">
                Support Us
              </span>
            </button>
          </div>

          {/* Header Section */}
          <div className="text-center mb-20 animate-fade-in">
            {/* Badge */}
            <div className="inline-block mb-8">
              <div className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/50 backdrop-blur-md hover:border-blue-400/70 transition-all">
                <span className="text-sm font-semibold text-transparent bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text flex items-center gap-2 justify-center">
                  <Radio size={16} className="animate-pulse" /> Premium Stream Verifier
                </span>
              </div>
            </div>
            
            {/* Main Title */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 mb-8 leading-tight drop-shadow-lg">
              M3U8 Link Checker
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Advanced streaming link verification with real-time monitoring, multi-format support, and professional-grade analytics
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-800/30 border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/50 hover:bg-slate-800/60 transition-all duration-300 group">
                <CheckCircle2 size={20} className="text-green-400 group-hover:scale-110 transition-transform" />
                <span className="text-slate-300 text-sm font-medium">Lightning Fast</span>
              </div>
              <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-800/30 border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/50 hover:bg-slate-800/60 transition-all duration-300 group">
                <Shield size={20} className="text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-slate-300 text-sm font-medium">Fully Secure</span>
              </div>
              <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-800/30 border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/50 hover:bg-slate-800/60 transition-all duration-300 group">
                <Zap size={20} className="text-yellow-400 group-hover:scale-110 transition-transform" />
                <span className="text-slate-300 text-sm font-medium">Real-time Results</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="mb-20">
            <LinkChecker />
          </div>

          {/* Stats Section */}
          <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-800/20 border border-slate-700/50 backdrop-blur-md p-8 hover:border-blue-500/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300"></div>
              <div className="relative">
                <Play size={32} className="text-blue-400 mb-4" />
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text mb-2">Multi-Format</div>
                <p className="text-slate-400 text-sm">Supports MP4, HLS, DASH, and more</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-800/20 border border-slate-700/50 backdrop-blur-md p-8 hover:border-blue-500/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300"></div>
              <div className="relative">
                <BarChart3 size={32} className="text-cyan-400 mb-4" />
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text mb-2">99.9%</div>
                <p className="text-slate-400 text-sm">Accuracy rate guaranteed</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-800/20 border border-slate-700/50 backdrop-blur-md p-8 hover:border-blue-500/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300"></div>
              <div className="relative">
                <Radio size={32} className="text-indigo-400 mb-4" />
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-indigo-300 to-blue-300 bg-clip-text mb-2">24/7</div>
                <p className="text-slate-400 text-sm">Continuous availability</p>
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="text-center pt-12 border-t border-slate-700/30">
            <p className="text-slate-500 text-sm">© 2024 M3U8 Link Checker • Advanced Streaming Analytics</p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <Footer />

      {/* Donate Dialog */}
      <DonateDialog
        open={donateDialogOpen}
        onOpenChange={setDonateDialogOpen}
      />
    </div>
  );
};

export default Index;