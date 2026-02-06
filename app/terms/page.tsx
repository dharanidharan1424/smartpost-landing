import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Terms & Conditions - SmartPost",
    description: "SmartPost Terms & Conditions - Read our terms of service for using our Instagram automation platform.",
};

export default function Terms() {
    return (
        <div className="min-h-screen bg-white">
            {/* Spacer for fixed navigation */}
            <div className="h-24"></div>
            <div className="container py-16">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="mb-4">Terms & Conditions</h1>
                        <p className="text-gray-600 text-lg">
                            Last Updated: February 3, 2026
                        </p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">1. Acceptance of Terms</h2>
                            <p className="text-gray-700 mb-4">
                                Welcome to SmartPost. By accessing or using our platform, services, or website (collectively, the "Services"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our Services.
                            </p>
                            <p className="text-gray-700">
                                These Terms constitute a legally binding agreement between you ("User," "you," or "your") and SmartPost ("we," "us," or "our"). We reserve the right to modify these Terms at any time, and your continued use of the Services constitutes acceptance of any changes.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">2. Service Description</h2>
                            <p className="text-gray-700 mb-4">
                                SmartPost is an Instagram automation platform designed for agencies and businesses to:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Connect and manage multiple Instagram accounts</li>
                                <li>Schedule and automatically publish Instagram posts</li>
                                <li>Maintain consistent posting schedules for client accounts</li>
                                <li>Track posting analytics and performance metrics</li>
                            </ul>
                            <p className="text-gray-700 mt-4">
                                Our Services are provided "as is" and we reserve the right to modify, suspend, or discontinue any aspect of the Services at any time without prior notice.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">3. Account Registration and Eligibility</h2>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">3.1 Eligibility</h3>
                            <p className="text-gray-700 mb-4">
                                To use SmartPost, you must:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Be at least 18 years of age</li>
                                <li>Have the legal capacity to enter into binding contracts</li>
                                <li>Not be prohibited from using the Services under applicable laws</li>
                                <li>Have authorization to connect and manage any Instagram accounts you link to our platform</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">3.2 Account Security</h3>
                            <p className="text-gray-700 mb-4">
                                You are responsible for:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Maintaining the confidentiality of your account credentials</li>
                                <li>All activities that occur under your account</li>
                                <li>Notifying us immediately of any unauthorized access or security breaches</li>
                                <li>Ensuring your account information is accurate and up-to-date</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">4. Instagram Account Connection</h2>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">4.1 Authorization</h3>
                            <p className="text-gray-700 mb-4">
                                By connecting an Instagram account to SmartPost, you represent and warrant that:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>You own the Instagram account or have explicit authorization from the account owner</li>
                                <li>You have the right to grant us the permissions requested through Meta's API</li>
                                <li>The connected account complies with Instagram's Terms of Service and Community Guidelines</li>
                                <li>You will obtain and maintain all necessary consents from account owners (if managing client accounts)</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">4.2 Permissions and Access</h3>
                            <p className="text-gray-700 mb-4">
                                When you connect an Instagram account, you grant SmartPost permission to:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Access basic account information (username, profile data)</li>
                                <li>Publish content (photos, videos, captions) on your behalf</li>
                                <li>Read engagement metrics and analytics</li>
                            </ul>
                            <p className="text-gray-700 mt-4">
                                You can revoke these permissions at any time by disconnecting the account through your SmartPost dashboard or through your Instagram settings.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">5. User Responsibilities and Acceptable Use</h2>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">5.1 Content Responsibility</h3>
                            <p className="text-gray-700 mb-4">
                                You are solely responsible for all content you upload, schedule, or publish through SmartPost. You agree that your content will:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Comply with all applicable laws and regulations</li>
                                <li>Not infringe on any third-party intellectual property rights</li>
                                <li>Not contain illegal, harmful, threatening, abusive, or defamatory material</li>
                                <li>Not violate Instagram's Community Guidelines or Terms of Service</li>
                                <li>Not contain spam, malware, or deceptive content</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">5.2 Prohibited Activities</h3>
                            <p className="text-gray-700 mb-4">
                                You agree NOT to:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Use the Services for any illegal or unauthorized purpose</li>
                                <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                                <li>Interfere with or disrupt the Services or servers</li>
                                <li>Use automated means to access the Services except as permitted by us</li>
                                <li>Reverse engineer, decompile, or disassemble any part of the Services</li>
                                <li>Resell or redistribute the Services without our written permission</li>
                                <li>Violate Meta's Platform Terms or Instagram's API usage policies</li>
                                <li>Engage in any activity that could damage our reputation or relationship with Meta/Instagram</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">6. Instagram API Usage and Limitations</h2>
                            <p className="text-gray-700 mb-4">
                                SmartPost operates in compliance with Meta's Platform Terms and Instagram API policies. You acknowledge that:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Instagram may impose rate limits on API usage, which may affect posting schedules</li>
                                <li>Meta may change, suspend, or discontinue API access at any time</li>
                                <li>Certain Instagram features may not be available through the API</li>
                                <li>We cannot guarantee uninterrupted access to Instagram's services</li>
                                <li>Changes to Instagram's policies may require modifications to our Services</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">7. Subscription and Payment Terms</h2>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">7.1 Subscription Plans</h3>
                            <p className="text-gray-700">
                                SmartPost offers various subscription plans with different features and pricing. By subscribing, you agree to pay all applicable fees according to the pricing and payment terms in effect at the time.
                            </p>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">7.2 Billing</h3>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Subscriptions are billed in advance on a recurring basis (monthly or annually)</li>
                                <li>You authorize us to charge your payment method automatically for each billing cycle</li>
                                <li>Prices are subject to change with 30 days' notice</li>
                                <li>All fees are non-refundable except as required by law or as explicitly stated in our refund policy</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">7.3 Cancellation</h3>
                            <p className="text-gray-700">
                                You may cancel your subscription at any time through your account settings. Cancellation will take effect at the end of your current billing period. No refunds will be provided for partial billing periods.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">8. Intellectual Property Rights</h2>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">8.1 Our Intellectual Property</h3>
                            <p className="text-gray-700 mb-4">
                                SmartPost and all related trademarks, logos, software, and content are owned by us or our licensors. You may not use our intellectual property without our prior written consent.
                            </p>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">8.2 Your Content</h3>
                            <p className="text-gray-700 mb-4">
                                You retain all ownership rights to content you upload to SmartPost. By using our Services, you grant us a limited, worldwide, non-exclusive license to:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Store, process, and transmit your content to provide the Services</li>
                                <li>Publish your content to connected Instagram accounts as instructed by you</li>
                            </ul>
                            <p className="text-gray-700 mt-4">
                                This license terminates when you delete your content or account, except for content that has been shared with others or as required for legal compliance.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">9. Account Suspension and Termination</h2>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">9.1 Termination by You</h3>
                            <p className="text-gray-700">
                                You may terminate your account at any time by contacting our support team or through your account settings. Upon termination, your access to the Services will cease, and your data will be deleted according to our Privacy Policy.
                            </p>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">9.2 Termination by Us</h3>
                            <p className="text-gray-700 mb-4">
                                We reserve the right to suspend or terminate your account immediately, without prior notice, if:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>You violate these Terms or our policies</li>
                                <li>Your use of the Services poses a security risk or could harm our systems or other users</li>
                                <li>You engage in fraudulent or illegal activities</li>
                                <li>Your account has been inactive for an extended period</li>
                                <li>We are required to do so by law or at the request of Meta/Instagram</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">10. Disclaimers and Limitation of Liability</h2>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">10.1 Service Disclaimer</h3>
                            <p className="text-gray-700 mb-4">
                                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                            </p>
                            <p className="text-gray-700">
                                We do not guarantee that the Services will be uninterrupted, error-free, or completely secure. We are not responsible for issues arising from Instagram API changes, downtime, or limitations.
                            </p>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">10.2 Limitation of Liability</h3>
                            <p className="text-gray-700 mb-4">
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, SMARTPOST SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Loss of profits, revenue, or business opportunities</li>
                                <li>Loss of data or content</li>
                                <li>Damage to reputation or brand</li>
                                <li>Costs of procurement of substitute services</li>
                            </ul>
                            <p className="text-gray-700 mt-4">
                                Our total liability for any claims arising from your use of the Services shall not exceed the amount you paid us in the 12 months preceding the claim.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">11. Indemnification</h2>
                            <p className="text-gray-700">
                                You agree to indemnify, defend, and hold harmless SmartPost, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses (including legal fees) arising from:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
                                <li>Your use of the Services</li>
                                <li>Your violation of these Terms</li>
                                <li>Your violation of any third-party rights, including intellectual property rights</li>
                                <li>Content you upload or publish through the Services</li>
                                <li>Your violation of Instagram's Terms of Service or Community Guidelines</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">12. Dispute Resolution</h2>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">12.1 Governing Law</h3>
                            <p className="text-gray-700">
                                These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
                            </p>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">12.2 Dispute Resolution Process</h3>
                            <p className="text-gray-700">
                                In the event of any dispute arising from these Terms or the Services, you agree to first attempt to resolve the dispute informally by contacting us at support@smartpost.co.in. If the dispute cannot be resolved within 30 days, either party may pursue formal legal remedies.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">13. Changes to Terms</h2>
                            <p className="text-gray-700">
                                We reserve the right to modify these Terms at any time. We will notify you of material changes by email or through a prominent notice on our platform at least 30 days before the changes take effect. Your continued use of the Services after the effective date constitutes acceptance of the modified Terms.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">14. General Provisions</h2>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">14.1 Entire Agreement</h3>
                            <p className="text-gray-700">
                                These Terms, together with our Privacy Policy, constitute the entire agreement between you and SmartPost regarding the Services.
                            </p>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">14.2 Severability</h3>
                            <p className="text-gray-700">
                                If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
                            </p>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">14.3 Waiver</h3>
                            <p className="text-gray-700">
                                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                            </p>

                            <h3 className="text-2xl font-semibold mb-3 mt-6">14.4 Assignment</h3>
                            <p className="text-gray-700">
                                You may not assign or transfer these Terms or your account without our prior written consent. We may assign our rights and obligations without restriction.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4">15. Contact Information</h2>
                            <p className="text-gray-700 mb-4">
                                If you have any questions about these Terms, please contact us:
                            </p>
                            <div className="bg-gray-50 p-6 rounded-xl">
                                <p className="text-gray-700 mb-2"><strong>Email:</strong> legal@smartpost.co.in</p>
                                <p className="text-gray-700 mb-2"><strong>Support:</strong> support@smartpost.co.in</p>
                                <p className="text-gray-700"><strong>Website:</strong> https://smartpost.co.in</p>
                            </div>
                        </section>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mt-12">
                            <p className="text-gray-700">
                                <strong>Note:</strong> By using SmartPost, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these Terms, you must discontinue use of our Services immediately.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
