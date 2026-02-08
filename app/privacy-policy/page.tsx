import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Privacy Policy - SmartPost",
    description: "SmartPost Privacy Policy - Learn how we collect, use, and protect your data when using our Instagram automation platform.",
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Spacer for fixed navigation */}
            <div className="h-24"></div>
            <div className="container py-16">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-12 text-center">
                        <h1 className="text-5xl font-bold mb-4 text-gray-900">Privacy Policy</h1>
                        <p className="text-gray-600 text-lg">
                            Last Updated: February 3, 2026
                        </p>
                    </div>

                    {/* Content */}
                    <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Introduction</h2>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Welcome to SmartPost ("we", "our", or "us"). We are committed to protecting your privacy and ensuring the security of your information. This Privacy Policy explains how we collect, use, store, and protect data when you use our Instagram publishing platform.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                By using SmartPost, you agree to this Privacy Policy.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Information We Collect</h2>
                            <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">2.1 Information You Provide</h3>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
                                <li>Account information (name, email, password)</li>
                                <li>Uploaded content (images, captions)</li>
                                <li>Communication or support messages</li>
                            </ul>

                            <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">2.2 Instagram Data via Meta API</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                When you connect your Instagram Professional account, SmartPost requests ONLY the permissions required for publishing:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
                                <li>
                                    <strong className="text-gray-900">instagram_business_basic</strong><br />
                                    Used to read basic profile information such as Instagram Business Account ID, username, and profile picture.
                                </li>
                                <li>
                                    <strong className="text-gray-900">instagram_business_content_publish</strong><br />
                                    Used to create and publish posts (images and videos) to your connected Instagram Business account.
                                </li>
                            </ul>
                            <p className="text-gray-700 mt-4 leading-relaxed">
                                We do NOT request or use any other Meta permissions.<br />
                                We do not access your Instagram password.
                            </p>

                            <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">2.3 Automatically Collected Data</h3>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
                                <li>Device information</li>
                                <li>IP address</li>
                                <li>Browser type</li>
                                <li>Usage and activity logs</li>
                                <li>Cookies to improve user experience</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. How We Use Your Information</h2>
                            <p className="text-gray-700 mb-4 leading-relaxed">We use your data to:</p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
                                <li>Connect your Instagram Business account</li>
                                <li>Create and publish posts on your behalf</li>
                                <li>Operate and improve our platform</li>
                                <li>Provide customer support</li>
                                <li>Generate analytics (only in aggregated form)</li>
                                <li>Ensure account security</li>
                            </ul>
                            <p className="text-gray-700 mt-4 leading-relaxed">
                                We do not publish any content without a user action.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Data Sharing and Disclosure</h2>
                            <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">4.1 Third Parties</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">We only share required data with:</p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
                                <li>Meta/Instagram Graph API (to publish your posts)</li>
                                <li>Secure cloud hosting providers</li>
                                <li>Payment processors (if applicable)</li>
                            </ul>
                            <p className="text-gray-700 mt-4 leading-relaxed">
                                We do not sell or share data with advertisers.
                            </p>

                            <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">4.2 Legal Compliance</h3>
                            <p className="text-gray-700 leading-relaxed">
                                We may disclose information if required by law.
                            </p>

                            <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">4.3 Business Transfers</h3>
                            <p className="text-gray-700 leading-relaxed">
                                If SmartPost is sold or merged, data may be transferred.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Data Security</h2>
                            <p className="text-gray-700 mb-4 leading-relaxed">We use modern security measures including:</p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
                                <li>SSL/TLS encryption</li>
                                <li>Secure token storage</li>
                                <li>Access controls</li>
                                <li>Regular security audits</li>
                            </ul>
                            <p className="text-gray-700 mt-4 leading-relaxed">
                                No method of transmission is 100% secure, but we take reasonable precautions.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Data Retention</h2>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                We retain your data while your account is active.<br />
                                If you delete your account:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
                                <li>Instagram tokens are deleted immediately</li>
                                <li>Personal data is deleted within 30 days</li>
                                <li>Analytics may be retained in anonymized form</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Your Rights</h2>
                            <p className="text-gray-700 mb-4 leading-relaxed">You may:</p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
                                <li>View your stored data</li>
                                <li>Update your personal information</li>
                                <li>Disconnect Instagram at any time</li>
                                <li>Request account deletion</li>
                                <li>Request data export</li>
                            </ul>
                            <p className="text-gray-700 mt-4 leading-relaxed">
                                Contact us at: privacy@smartpost.co.in
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Cookies</h2>
                            <p className="text-gray-700 mb-4 leading-relaxed">We use cookies for:</p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
                                <li>Login sessions</li>
                                <li>User preferences</li>
                                <li>Usage analytics</li>
                            </ul>
                            <p className="text-gray-700 mt-4 leading-relaxed">
                                You may disable cookies, but some features may not work.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Meta Platform Policy Compliance</h2>
                            <p className="text-gray-700 mb-4 leading-relaxed">SmartPost complies with Meta Platform Terms and Developer Policies:</p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
                                <li>We request only the minimum required permissions</li>
                                <li>We use Instagram data only for publishing</li>
                                <li>We never sell, share, or misuse Instagram data</li>
                                <li>Users can disconnect Instagram at any time</li>
                                <li>We delete Instagram data when accounts are removed</li>
                            </ul>
                        </section>

                        <section className="mb-0">
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Children's Privacy</h2>
                            <p className="text-gray-700 leading-relaxed">
                                SmartPost is not intended for individuals under 18 years of age.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
