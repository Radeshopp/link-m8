import { Link } from "react-router-dom";
import { Heart, Github, Mail } from "lucide-react";
import { AnimatedLogo } from "./AnimatedLogo";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative border-t border-slate-700/30 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Brand Section */}
            <div className="col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <AnimatedLogo />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Advanced streaming link verification with real-time monitoring and professional-grade analytics.
              </p>
              <div className="flex gap-4 mt-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:contact@m3u8checker.com"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Features Links */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Features
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/features"
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/how-it-works"
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/api-reference"
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    API Reference
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/privacy"
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/refund"
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cookies"
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700/30 my-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-slate-500 text-sm">
              <p>&copy; {currentYear} M3U8 Link Checker. All rights reserved.</p>
              <p className="text-xs mt-2">
                Optimized for performance • Enhanced security • Privacy first
              </p>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-6">
              {/* Status Badge */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-xs text-green-400 font-medium">All Systems Operational</span>
              </div>

              {/* Love Heart */}
              <div className="flex items-center gap-2 text-slate-500 hover:text-red-400 transition-colors cursor-pointer group">
                <Heart size={16} className="group-hover:fill-red-400" />
                <span className="text-xs">Made with Care</span>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="mt-8 pt-8 border-t border-slate-700/30">
            <p className="text-center text-xs text-slate-600">
              This tool is provided as-is for educational and testing purposes. Always ensure you have permission before checking links.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
