import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";

const AboutUs = () => {
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
              About Us
            </h1>
            <p className="text-slate-400">Learn more about our mission and vision</p>
          </div>

          <div className="space-y-8 text-slate-300">
            <section className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Our Mission</h2>
              <p className="text-slate-400 leading-relaxed">
                At M3U8 Link Checker, our mission is to provide the most reliable, fast, and user-friendly tool for verifying streaming links. We believe that everyone should have access to powerful streaming analytics without complexity or cost barriers.
              </p>
            </section>

            <section className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Our Vision</h2>
              <p className="text-slate-400 leading-relaxed">
                We envision a world where content creators, broadcasters, and streaming enthusiasts can effortlessly monitor and verify their streaming infrastructure with professional-grade tools that are accessible to everyone.
              </p>
            </section>

            <section className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Why We Built This</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                We noticed that content creators and streaming professionals needed a simple yet powerful tool to verify their M3U8 links and monitor streaming quality. Existing solutions were either too expensive, too complicated, or not user-friendly enough.
              </p>
              <p className="text-slate-400 leading-relaxed">
                That's why we created M3U8 Link Checker - a free, easy-to-use tool that provides professional-grade analytics without the complexity.
              </p>
            </section>

            <section className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Our Values</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">Accessibility</h3>
                  <p className="text-slate-400">We believe powerful tools should be free and accessible to everyone.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">Reliability</h3>
                  <p className="text-slate-400">Our tool is built on robust infrastructure to ensure consistent, accurate results 24/7.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">Privacy</h3>
                  <p className="text-slate-400">Your data is yours. We never share or sell your information to third parties.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">Innovation</h3>
                  <p className="text-slate-400">We continuously improve our tool with new features and better performance.</p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Get In Touch</h2>
              <p className="text-slate-400 mb-4">
                Have questions, suggestions, or feedback? We'd love to hear from you! Contact us through our website's contact form or reach out directly.
              </p>
              <p className="text-slate-400">
                Your feedback helps us improve and create better tools for the community.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
