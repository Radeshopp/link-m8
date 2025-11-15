import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";

const Cookies = () => {
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
              Cookie Policy
            </h1>
            <p className="text-slate-400">Last Updated: November 2025</p>
          </div>

          <div className="space-y-8 text-slate-300">
            <section className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">1. What Are Cookies?</h2>
              <p className="text-slate-400 leading-relaxed">
                Cookies are small text files stored on your device that help us recognize you and enhance your experience on our website. They are widely used to make websites work more efficiently and provide useful information to website owners.
              </p>
            </section>

            <section className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">2. Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">Essential Cookies</h3>
                  <p className="text-slate-400">Required for the website to function properly, including user authentication and security features.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">Performance Cookies</h3>
                  <p className="text-slate-400">Help us understand how visitors use our website and analyze performance metrics.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">Preference Cookies</h3>
                  <p className="text-slate-400">Remember your preferences and settings to personalize your experience.</p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">3. How We Use Cookies</h2>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Maintaining your login session</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Remembering your preferences</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Analyzing website usage patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Improving website functionality</span>
                </li>
              </ul>
            </section>

            <section className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">4. Managing Cookies</h2>
              <p className="text-slate-400 mb-4">You can control cookies through your browser settings:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Accept or reject cookies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Delete existing cookies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Receive alerts when new cookies are set</span>
                </li>
              </ul>
            </section>

            <section className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">5. Third-Party Cookies</h2>
              <p className="text-slate-400 leading-relaxed">
                Some cookies may be set by third-party services integrated into our website. We recommend reviewing their cookie policies for more information about how they handle your data.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cookies;
