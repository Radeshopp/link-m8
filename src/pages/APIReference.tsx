import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";

const APIReference = () => {
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
              API Reference
            </h1>
            <p className="text-slate-400">Developer documentation for M3U8 Link Checker API</p>
          </div>

          <div className="space-y-8 text-slate-300">
            <section className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Base URL</h2>
              <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 font-mono text-cyan-400">
                https://api.m3u8checker.com/v1
              </div>
            </section>

            <section className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Authentication</h2>
              <p className="text-slate-400 mb-4">Include your API key in the request header:</p>
              <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 font-mono text-sm text-cyan-400 overflow-x-auto">
                Authorization: Bearer YOUR_API_KEY
              </div>
            </section>

            <section className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Endpoints</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">POST /verify</h3>
                  <p className="text-slate-400 mb-2">Verify a single M3U8 link</p>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 font-mono text-sm text-cyan-400 overflow-x-auto">
                    {`{
  "url": "https://example.com/stream.m3u8",
  "timeout": 30
}`}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">POST /verify-batch</h3>
                  <p className="text-slate-400 mb-2">Verify multiple M3U8 links at once</p>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 font-mono text-sm text-cyan-400 overflow-x-auto">
                    {`{
  "urls": [
    "https://example.com/stream1.m3u8",
    "https://example.com/stream2.m3u8"
  ],
  "timeout": 30
}`}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">GET /status</h3>
                  <p className="text-slate-400 mb-2">Check API service status and usage</p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Response Format</h2>
              <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 font-mono text-sm text-cyan-400 overflow-x-auto">
                {`{
  "status": "success",
  "data": {
    "url": "https://example.com/stream.m3u8",
    "valid": true,
    "responseTime": 245,
    "statusCode": 200,
    "contentType": "application/vnd.apple.mpegurl"
  }
}`}
              </div>
            </section>

            <section className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Error Handling</h2>
              <div className="space-y-3">
                <p className="text-slate-400">The API returns standard HTTP status codes:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span><strong>200 OK</strong> - Request successful</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span><strong>400 Bad Request</strong> - Invalid parameters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span><strong>401 Unauthorized</strong> - Invalid API key</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span><strong>429 Too Many Requests</strong> - Rate limit exceeded</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span><strong>500 Server Error</strong> - Internal server error</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="bg-gradient-to-br from-slate-800/30 to-slate-800/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Rate Limiting</h2>
              <p className="text-slate-400 mb-4">API rate limits are based on your plan:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span><strong>Free Plan:</strong> 100 requests per day</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span><strong>Pro Plan:</strong> 10,000 requests per day</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span><strong>Enterprise Plan:</strong> Unlimited requests</span>
                </li>
              </ul>
            </section>

            <section className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">Support</h2>
              <p className="text-slate-400">
                For API support and technical questions, please contact our developer support team through the contact form or email us directly.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default APIReference;
