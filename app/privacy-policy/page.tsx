import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Privacy Policy - SmartPost",
    description: "SmartPost Privacy Policy - Learn how we collect, use, and protect your data when using our Instagram automation platform.",
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white pt-20">
            <div className="container py-16">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="mb-4">Privacy Policy</h1>
                        <p className="text-gray-600 text-lg">
                            Last Updated: February 3, 2026
                        </p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">1. Introduction</h2>
                            <p className="text-gray-700 mb-4">
                                Welcome to SmartPost ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Instagram automation platform and services.
                            </p>
                            <p className="text-gray-700">
                                By using SmartPost, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">2. Information We Collect</h2>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">2.1 Information You Provide</h3>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li><strong>Account Information:</strong> Name, email address, password, and company/agency details</li>
                                <li><strong>Payment Information:</strong> Billing details and payment method information (processed securely through third-party payment processors)</li>
                                <li><strong>Content Data:</strong> Images, captions, hashtags, and other content you upload for scheduling</li>
                                <li><strong>Communication Data:</strong> Messages, feedback, and support requests you send to us</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">2.2 Instagram Data via Meta API</h3>
                            <p className="text-gray-700 mb-4">
                                When you connect your clients' Instagram accounts using our Instagram Connect button, we request the following permissions from Meta's Instagram API:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li><strong>instagram_basic:</strong> Access to basic account information including username, account ID, and profile information</li>
                                <li><strong>content_publish:</strong> Permission to publish photos, videos, and stories on behalf of the connected Instagram account</li>
                                <li><strong>pages_read_engagement:</strong> Access to read engagement metrics for published content</li>
                            </ul>
                            <p className="text-gray-700 mt-4">
                                We only request the minimum permissions necessary to provide our scheduling and posting services. We do not access or store your Instagram password.
                            </p>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">2.3 Automatically Collected Information</h3>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li><strong>Usage Data:</strong> Information about how you interact with our platform, including features used, posts scheduled, and time spent</li>
                                <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers</li>
                                <li><strong>Cookies and Tracking:</strong> We use cookies and similar technologies to enhance user experience and analyze platform usage</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">3. How We Use Your Information</h2>
                            <p className="text-gray-700 mb-4">We use the collected information for the following purposes:</p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li><strong>Service Delivery:</strong> To provide, maintain, and improve our Instagram automation and scheduling services</li>
                                <li><strong>Content Publishing:</strong> To publish scheduled posts to connected Instagram accounts at specified times</li>
                                <li><strong>Account Management:</strong> To manage your account, process payments, and provide customer support</li>
                                <li><strong>Analytics:</strong> To analyze usage patterns, track posting consistency, and generate performance reports</li>
                                <li><strong>Communication:</strong> To send service updates, security alerts, and respond to your inquiries</li>
                                <li><strong>Compliance:</strong> To comply with legal obligations and enforce our Terms of Service</li>
                                <li><strong>Platform Improvement:</strong> To develop new features and enhance existing functionality</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">4. Data Sharing and Disclosure</h2>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">4.1 Third-Party Services</h3>
                            <p className="text-gray-700 mb-4">We share your information with the following third parties:</p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li><strong>Meta/Instagram:</strong> We share content data with Instagram's API to publish posts on your behalf</li>
                                <li><strong>Payment Processors:</strong> Secure payment information is processed through PCI-compliant payment gateways</li>
                                <li><strong>Cloud Hosting:</strong> Data is stored on secure cloud infrastructure providers</li>
                                <li><strong>Analytics Services:</strong> Anonymous usage data may be shared with analytics platforms</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">4.2 Legal Requirements</h3>
                            <p className="text-gray-700">
                                We may disclose your information if required by law, court order, or governmental request, or to protect our rights, property, or safety, or that of our users or the public.
                            </p>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">4.3 Business Transfers</h3>
                            <p className="text-gray-700">
                                In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">5. Data Security</h2>
                            <p className="text-gray-700 mb-4">
                                We implement industry-standard security measures to protect your information:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li><strong>Encryption:</strong> All data transmitted between your browser and our servers is encrypted using SSL/TLS</li>
                                <li><strong>Access Controls:</strong> Strict access controls limit who can view or modify your data</li>
                                <li><strong>Secure Storage:</strong> Data is stored on encrypted, secure servers with regular backups</li>
                                <li><strong>OAuth Authentication:</strong> Instagram connections use secure OAuth 2.0 protocol</li>
                                <li><strong>Regular Audits:</strong> We conduct regular security audits and vulnerability assessments</li>
                            </ul>
                            <p className="text-gray-700 mt-4">
                                While we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">6. Data Retention</h2>
                            <p className="text-gray-700">
                                We retain your information for as long as your account is active or as needed to provide services. When you delete your account, we will delete or anonymize your personal information within 30 days, except where we are required to retain it for legal or compliance purposes. Scheduled content and published posts may be retained for analytics purposes in anonymized form.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">7. Your Rights and Choices</h2>
                            <p className="text-gray-700 mb-4">You have the following rights regarding your information:</p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                                <li><strong>Correction:</strong> Update or correct inaccurate information through your account settings</li>
                                <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
                                <li><strong>Disconnect:</strong> Revoke Instagram account connections at any time through your dashboard</li>
                                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications (service-related emails will continue)</li>
                                <li><strong>Data Portability:</strong> Request an export of your data in a machine-readable format</li>
                            </ul>
                            <p className="text-gray-700 mt-4">
                                To exercise these rights, please contact us at privacy@smartpost.co.in.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">8. Cookies and Tracking Technologies</h2>
                            <p className="text-gray-700 mb-4">
                                We use cookies and similar tracking technologies to enhance your experience:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li><strong>Essential Cookies:</strong> Required for authentication and platform functionality</li>
                                <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our platform</li>
                                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                            </ul>
                            <p className="text-gray-700 mt-4">
                                You can control cookies through your browser settings, but disabling certain cookies may affect platform functionality.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">9. Meta Platform Policy Compliance</h2>
                            <p className="text-gray-700 mb-4">
                                SmartPost is built in compliance with Meta's Platform Terms and Developer Policies. We:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Only request necessary Instagram permissions for our services</li>
                                <li>Do not sell or share Instagram data with third parties for advertising</li>
                                <li>Respect Instagram's rate limits and API usage guidelines</li>
                                <li>Provide clear information about data usage before connection</li>
                                <li>Allow users to disconnect Instagram accounts at any time</li>
                                <li>Delete Instagram data when accounts are disconnected or deleted</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">10. Children's Privacy</h2>
                            <p className="text-gray-700">
                                SmartPost is not intended for users under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately, and we will delete it.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">11. International Data Transfers</h2>
                            <p className="text-gray-700">
                                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable data protection laws.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">12. Changes to This Privacy Policy</h2>
                            <p className="text-gray-700">
                                We may update this Privacy Policy from time to time. We will notify you of significant changes by email or through a prominent notice on our platform. Your continued use of SmartPost after changes become effective constitutes acceptance of the updated policy.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">13. Contact Us</h2>
                            <p className="text-gray-700 mb-4">
                                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                            </p>
                            <div className="bg-gray-50 p-6 rounded-xl">
                                <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@smartpost.co.in</p>
                                <p className="text-gray-700 mb-2"><strong>Support:</strong> support@smartpost.co.in</p>
                                <p className="text-gray-700"><strong>Website:</strong> https://smartpost.co.in</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
