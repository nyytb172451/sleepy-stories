'use client'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-950 to-indigo-950 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-purple-100 space-y-6">
          <p className="text-sm text-purple-300">Last updated: February 6, 2026</p>
          
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Welcome to Snoozy Stories</h2>
            <p>
              Snoozy Stories (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting the privacy of our visitors. 
              This Privacy Policy explains how we collect, use, and safeguard information when you visit snoozystories.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Information We Collect</h2>
            <p className="mb-3"><strong>Story Submissions:</strong> When you submit a story idea, we collect:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>First name only (for credit if your idea is selected)</li>
              <li>Your story idea text</li>
            </ul>
            <p className="mt-3">
              We do not collect email addresses, last names, ages, or any other personal information from story submissions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Children&apos;s Privacy (COPPA)</h2>
            <p>
              Snoozy Stories is designed for families with young children. We are committed to complying with the 
              Children&apos;s Online Privacy Protection Act (COPPA). We do not knowingly collect personal information 
              from children under 13. Our story submission form only collects a first name and story idea — no email, 
              age, or contact information is requested.
            </p>
            <p className="mt-3">
              If you are a parent and believe your child has submitted personal information beyond what is described, 
              please contact us and we will promptly delete it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Cookies and Analytics</h2>
            <p>
              We use Google Analytics to understand how visitors use our site. This service may collect:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
              <li>Pages visited and time spent</li>
              <li>General location (country/city level)</li>
              <li>Device type and browser</li>
              <li>Referral sources</li>
            </ul>
            <p className="mt-3">
              This data is aggregated and does not personally identify individual visitors. You can opt out of 
              Google Analytics by installing the{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" className="text-yellow-300 hover:underline" target="_blank" rel="noopener noreferrer">
                Google Analytics Opt-out Browser Add-on
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Advertising</h2>
            <p>
              We display advertisements through Google AdSense to support the free operation of this website. 
              Google and its partners may use cookies to serve ads based on prior visits to this or other websites. 
              You can opt out of personalized advertising by visiting{' '}
              <a href="https://www.google.com/settings/ads" className="text-yellow-300 hover:underline" target="_blank" rel="noopener noreferrer">
                Google Ads Settings
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Third-Party Links</h2>
            <p>
              Our site may contain links to other websites. We are not responsible for the privacy practices 
              of these external sites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Data Security</h2>
            <p>
              We implement reasonable security measures to protect the information we collect. However, no 
              internet transmission is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with 
              an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please reach out through our story submission 
              page or visit our About page.
            </p>
          </section>
        </div>

        <div className="mt-8 text-center">
          <a href="/" className="text-yellow-300 hover:text-yellow-200 transition-colors">
            ← Back to Stories
          </a>
        </div>
      </div>
    </main>
  )
}
