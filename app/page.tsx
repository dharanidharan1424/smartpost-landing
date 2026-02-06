import SmartCTA from '@/components/SmartCTA';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white pt-24 pb-20 overflow-hidden w-full">
        
        <div className="w-full flex justify-center">
          <div className="max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-sky-100 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
              <span className="text-base font-semibold text-sky-600">⚡ Trusted by 500+ Marketing Agencies</span>
            </div>

            <h1 className="text-gray-900 mb-6 text-6xl md:text-7xl font-bold leading-tight">
              Stop Hiring for Instagram Posts
            </h1>
            <p className="text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Automate daily Instagram posting for all your clients from one simple dashboard. Save 10+ hours per week per agency and focus on strategy instead of scheduling.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <SmartCTA />
              <a href="#how-it-works" className="btn btn-secondary btn-lg">
                Watch Demo (3 min)
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-base text-gray-600 mb-12">
              <div className="flex items-center gap-2">
                <span className="text-xl">⭐⭐⭐⭐⭐</span>
                <span><strong>4.9/5</strong> on G2</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-gray-200"></div>
              <div>
                <strong>No credit card</strong> required to start
              </div>
              <div className="hidden sm:block w-px h-6 bg-gray-200"></div>
              <div>
                <strong>5-minute</strong> setup
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-sky-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-gray-700">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-sky-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-gray-700">5-minute setup</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-sky-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Full feature access</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-gray-50 rounded-lg p-8 transition">
                <div className="text-5xl font-bold text-gray-900 mb-2">2M+</div>
                <div className="text-base font-medium text-gray-600">Posts Scheduled</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-8 transition">
                <div className="text-5xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-base font-medium text-gray-600">Agencies Trust Us</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-8 transition">
                <div className="text-5xl font-bold text-gray-900 mb-2">99.9%</div>
                <div className="text-base font-medium text-gray-600">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section id="features" className="section bg-white py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-gray-900 text-5xl">
              Everything You Need to Scale
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Purpose-built for agencies. Manage all clients from one dashboard and deliver consistent results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card bg-white border border-gray-200 hover:border-sky-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-lg bg-sky-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">One-Click Instagram Connect</h3>
              <p className="text-gray-600 text-lg">
                Connect unlimited client accounts instantly with secure OAuth. No complicated setup required.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card bg-white border border-gray-200 hover:border-sky-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-lg bg-sky-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Batch Schedule Posts</h3>
              <p className="text-gray-600 text-lg">
                Upload 100s of posts at once with bulk scheduling. Set the time, frequency, and let it run automatically.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card bg-white border border-gray-200 hover:border-sky-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-lg bg-sky-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Real-Time Analytics</h3>
              <p className="text-gray-600 text-lg">
                Track posting consistency, best times to post, and engagement metrics for each client account.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="card bg-white border border-gray-200 hover:border-sky-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-lg bg-sky-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Team Collaboration</h3>
              <p className="text-gray-600 text-lg">
                Invite team members with different roles. Full audit logs and permission controls for security.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="card bg-white border border-gray-200 hover:border-sky-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-lg bg-sky-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Enterprise Security</h3>
              <p className="text-gray-600 text-lg">
                Bank-level encryption, SOC 2 compliant, and 99.9% SLA guaranteed. Your data is safe.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="card bg-white border border-gray-200 hover:border-sky-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-lg bg-sky-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">24/7 Support</h3>
              <p className="text-gray-600 text-lg">
                Priority support for agencies. Get help when you need it with dedicated account managers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-gray-900 text-5xl">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Setup takes less than 5 minutes. Start automating your Instagram posting today.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-sky-600 flex items-center justify-center text-white text-lg font-semibold">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Connect Instagram Accounts</h3>
                  <p className="text-gray-600 text-lg">
                    Use our secure Instagram Connect button to link your clients' accounts. We request only the necessary permissions with full compliance to Meta's guidelines. Your clients maintain complete control.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-sky-600 flex items-center justify-center text-white text-lg font-semibold">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Upload & Schedule Content</h3>
                  <p className="text-gray-600 text-lg">
                    Upload images, write captions, and schedule posts for optimal times. Set daily posting frequency and let our intelligent system handle the rest automatically.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-sky-600 flex items-center justify-center text-white text-lg font-semibold">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Relax & Monitor Analytics</h3>
                  <p className="text-gray-600 text-lg">
                    Posts publish automatically on schedule. Monitor performance, track consistency, and manage all clients from your dashboard. We handle the execution while you focus on strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section bg-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-gray-900 mb-6 text-5xl">
              Ready to Automate Your Instagram Posting?
            </h2>
            <p className="text-2xl text-gray-600 mb-8">
              Join 500+ agencies that have automated their Instagram posting with SmartPost. Start your free trial today—no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.smartpost.co.in/signup" className="btn bg-white text-sky-600 hover:bg-gray-50 font-semibold btn-lg">
                Start Free Trial
              </a>
              <a href="https://app.smartpost.co.in/demo" className="btn btn-secondary btn-lg">
                Schedule Demo
              </a>
            </div>
            <p className="text-base text-gray-600 mt-6">
              ✓ No credit card required • ✓ 5-minute setup • ✓ Full feature access
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-gray-900 text-5xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <details className="group border border-gray-200 rounded-lg p-6 cursor-pointer hover:border-sky-300 transition w-full">
              <summary className="flex items-center justify-between font-semibold text-gray-900 text-lg">
                What's included in the free trial?
                <span className="ml-4 group-open:rotate-180 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </summary>
              <p className="text-gray-600 text-lg mt-4">
                Your 14-day free trial includes full access to all Professional features: unlimited client accounts, daily posting automation, advanced analytics, team collaboration, and priority support. No credit card needed to start.
              </p>
            </details>

            <details className="group border border-gray-200 rounded-lg p-6 cursor-pointer hover:border-sky-300 transition w-full">
              <summary className="flex items-center justify-between font-semibold text-gray-900 text-lg">
                Is my clients' data safe with SmartPost?
                <span className="ml-4 group-open:rotate-180 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </summary>
              <p className="text-gray-600 text-lg mt-4">
                Yes. We're SOC 2 Type II compliant and use bank-level encryption for all data. We request minimal Instagram permissions (instagram_basic and content_publish only) with full Meta API compliance. Your clients retain full control of their accounts.
              </p>
            </details>

            <details className="group border border-gray-200 rounded-lg p-6 cursor-pointer hover:border-sky-300 transition w-full">
              <summary className="flex items-center justify-between font-semibold text-gray-900 text-lg">
                Can I manage multiple client accounts?
                <span className="ml-4 group-open:rotate-180 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </summary>
              <p className="text-gray-600 text-lg mt-4">
                Absolutely! The Starter plan includes up to 5 clients, while Professional and Enterprise plans offer unlimited client accounts. Manage all your clients from one unified dashboard with complete separation of data.
              </p>
            </details>

            <details className="group border border-gray-200 rounded-lg p-6 cursor-pointer hover:border-sky-300 transition w-full">
              <summary className="flex items-center justify-between font-semibold text-gray-900 text-lg">
                What happens if a post fails to publish?
                <span className="ml-4 group-open:rotate-180 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </summary>
              <p className="text-gray-600 text-lg mt-4">
                Our 99.9% uptime SLA ensures posts are published on schedule. If a post fails, you'll receive an immediate notification and can retry with one click. We log all publishing attempts for full transparency.
              </p>
            </details>

            <details className="group border border-gray-200 rounded-lg p-6 cursor-pointer hover:border-sky-300 transition w-full">
              <summary className="flex items-center justify-between font-semibold text-gray-900 text-lg">
                How do you handle Instagram API changes?
                <span className="ml-4 group-open:rotate-180 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </summary>
              <p className="text-gray-600 text-lg mt-4">
                We maintain partnerships with Meta and constantly monitor API changes. Our team automatically updates SmartPost to stay compliant. You'll never need to worry about deprecations affecting your workflow.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer component is rendered by app/layout.tsx - removed duplicate inline footer */}
    </div>
  );
}
