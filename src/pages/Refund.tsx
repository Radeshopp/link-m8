import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";

const Refund = () => {
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
              Refund Policy
            </h1>
            <p className="text-slate-400">Last Updated: November 2025</p>
          </div>

          <div className="space-y-8 text-slate-300">
            <section className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">1. Donations</h2>
              <p className="text-slate-400 leading-relaxed">
                Donations made through our platform are voluntary contributions to support our project. Please note that donations are generally non-refundable. However, if you believe you made a donation in error or have experienced a technical issue, we encourage you to contact us immediately.
              </p>
            </section>

            <section className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">2. Refund Process</h2>
              <p className="text-slate-400 mb-4">If you wish to request a refund, please follow these steps:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">1.</span>
                  <span>Contact us within 30 days of your donation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">2.</span>
                  <span>Provide your transaction ID and email address</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">3.</span>
                  <span>Explain the reason for your refund request</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">4.</span>
                  <span>We will review and respond within 7-10 business days</span>
                </li>
              </ul>
            </section>

            <section className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">3. Refund Eligibility</h2>
              <p className="text-slate-400 mb-4">Refunds may be issued for:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Duplicate charges or technical errors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Unauthorized transactions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Service issues preventing proper donation</span>
                </li>
              </ul>
            </section>

            <section className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">4. Refund Timeline</h2>
              <p className="text-slate-400 leading-relaxed">
                Approved refunds will be processed within 5-10 business days. Please allow up to 2-3 business days for the funds to appear in your original payment method.
              </p>
            </section>

            <section className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">5. Contact Us</h2>
              <p className="text-slate-400">
                For refund requests or questions, please contact us through our website's contact form or email us directly.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Refund;
