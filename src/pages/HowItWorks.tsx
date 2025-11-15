import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500 via-cyan-400 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-br from-purple-500 via-violet-400 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-12"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <div className="mb-12">
            <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 bg-clip-text mb-4">
              How It Works
            </h1>
            <p className="text-slate-400">Simple steps to verify your streaming links</p>
          </div>

          <div className="space-y-8 text-slate-300">
            <section className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-300 mb-2">Enter Your Link</h2>
                  <p className="text-slate-400">
                    Copy and paste your M3U8 streaming link into our verification tool. Support for single links or batch processing.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-300 mb-2">Click Verify</h2>
                  <p className="text-slate-400">
                    Press the verify button and our advanced algorithms will check your link's validity and streaming quality in seconds.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-300 mb-2">Get Results</h2>
                  <p className="text-slate-400">
                    Receive instant results showing link status, response time, bitrate, resolution, and other detailed metrics.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-300 mb-2">Analyze & Monitor</h2>
                  <p className="text-slate-400">
                    View detailed analytics, set up monitoring alerts, and track your links' performance over time with our comprehensive dashboard.
                  </p>
                </div>
              </div>
            </section>

            {/* Additional Info */}
            <section className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl p-8 backdrop-blur-sm mt-12">
              <h3 className="text-xl font-bold text-blue-300 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>No installation required - works directly in your browser</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Completely free to use with no hidden charges</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Results are accurate and updated in real-time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Your data is always secure and private</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorks;
