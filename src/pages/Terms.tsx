import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500 via-cyan-400 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-br from-purple-500 via-violet-400 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-12"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 bg-clip-text mb-4">
              Terms of Service
            </h1>
            <p className="text-slate-400">Last Updated: November 2025</p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-slate-300">
            {/* Section 1 */}
            <section className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-400 leading-relaxed">
                By accessing and using M3U8 Link Checker, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            {/* Section 2 */}
            <section className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">2. Use License</h2>
              <p className="text-slate-400 mb-4">Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only.</p>
              <p className="text-slate-400">This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="space-y-2 ml-4 mt-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Modify or copy the materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Use the materials for any commercial purpose or for any public display</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Attempt to decompile or reverse engineer any software contained on the website</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Remove any copyright or other proprietary notations from the materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Transfer the materials to another person or "mirror" the materials on any other server</span>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">3. Disclaimer</h2>
              <p className="text-slate-400 leading-relaxed">
                The materials on our website are provided on an 'as is' basis. M3U8 Link Checker makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            {/* Section 4 */}
            <section className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">4. Limitations</h2>
              <p className="text-slate-400 leading-relaxed">
                In no event shall M3U8 Link Checker or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
              </p>
            </section>

            {/* Section 5 */}
            <section className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">5. Accuracy of Materials</h2>
              <p className="text-slate-400 leading-relaxed">
                The materials appearing on our website could include technical, typographical, or photographic errors. M3U8 Link Checker does not warrant that any of the materials on its website are accurate, complete, or current.
              </p>
            </section>

            {/* Section 6 */}
            <section className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">6. Links</h2>
              <p className="text-slate-400 leading-relaxed">
                M3U8 Link Checker has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by M3U8 Link Checker of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            {/* Section 7 */}
            <section className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">7. Modifications</h2>
              <p className="text-slate-400 leading-relaxed">
                M3U8 Link Checker may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            {/* Section 8 */}
            <section className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">8. Governing Law</h2>
              <p className="text-slate-400 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the internet and the location of service provider, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            {/* Section 9 */}
            <section className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">9. Contact Information</h2>
              <p className="text-slate-400">
                If you have any questions about these Terms of Service, please contact us through our website's contact form.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
