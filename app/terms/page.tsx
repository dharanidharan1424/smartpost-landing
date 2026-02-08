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
                        <h1 className="mb-4 text-4xl font-bold text-gray-900">Terms & Conditions</h1>
                        <p className="text-gray-600 text-lg">
                            Last Updated: February 3, 2026
                        </p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4 text-gray-900">1. Acceptance of Terms</h2>
                            <p className="text-gray-700 mb-4">
                                Welcome to SmartPost. By accessing or using our platform (“Services”), you agree to be bound by these Terms and Conditions (“Terms”). If you do not agree, do not use the Services.
                            </p>
                            <p className="text-gray-700">
                                SmartPost may update these Terms at any time. Continued use indicates acceptance.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4 text-gray-900">2. Service Description</h2>
                            <p className="text-gray-700 mb-4">
                                SmartPost is a web-based Instagram publishing tool that allows users to:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Connect their Instagram Professional (Business) account</li>
                                <li>Create and publish Instagram feed posts</li>
                                <li>Schedule posts for future times</li>
                                <li>Manage posting workflows through a simple dashboard</li>
                            </ul>
                            <p className="text-gray-700 mt-4">
                                All services are provided “as is” and may be modified or discontinued at any time.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4 text-gray-900">3. Account Registration and Eligibility</h2>

                            <h3 className="text-2xl font-semibold mb-3 mt-6 text-gray-900">3.1 Eligibility</h3>
                            <p className="text-gray-700 mb-4">
                                To use SmartPost, you must:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Be at least 18 years old</li>
                                <li>Have legal capacity to enter into agreements</li>
                                <li>Be authorized to connect the Instagram account you link</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mb-3 mt-6 text-gray-900">3.2 Account Security</h3>
                            <p className="text-gray-700 mb-4">
                                You are responsible for keeping your login credentials secure and notifying us of any unauthorized access.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4 text-gray-900">4. Instagram Account Connection</h2>

                            <h3 className="text-2xl font-semibold mb-3 mt-6 text-gray-900">4.1 Authorization</h3>
                            <p className="text-gray-700 mb-4">
                                By connecting an Instagram Professional account, you confirm that:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>You own or are authorized to manage the account</li>
                                <li>You agree to grant SmartPost the permissions requested through Instagram Business Login OAuth</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mb-3 mt-6 text-gray-900">4.2 Instagram Permissions</h3>
                            <p className="text-gray-700 mb-4">
                                SmartPost uses only the minimum required Instagram permissions:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>
                                    <strong className="text-gray-900">instagram_business_basic</strong> – to retrieve Instagram Business Account ID, username, and profile picture
                                </li>
                                <li>
                                    <strong className="text-gray-900">instagram_business_content_publish</strong> – to create and publish posts to your Instagram Business account
                                </li>
                            </ul>
                            <p className="text-gray-700 mt-4">
                                You may revoke access at any time through your Instagram settings or your SmartPost dashboard.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4 text-gray-900">5. User Responsibilities & Acceptable Use</h2>

                            <h3 className="text-2xl font-semibold mb-3 mt-6 text-gray-900">5.1 Content Responsibility</h3>
                            <p className="text-gray-700 mb-4">
                                You are solely responsible for the content you upload and publish. Your content must:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Follow Instagram’s Community Guidelines</li>
                                <li>Not violate any laws</li>
                                <li>Not violate intellectual property rights</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mb-3 mt-6 text-gray-900">5.2 Prohibited Activities</h3>
                            <p className="text-gray-700 mb-4">
                                You agree not to:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Use SmartPost for any unlawful activity</li>
                                <li>Attempt unauthorized access</li>
                                <li>Upload harmful or abusive content</li>
                                <li>Violate Instagram’s or Meta’s API terms</li>
                                <li>Interfere with platform security or operation</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold mb-4 text-gray-900">6. Instagram API Usage & Limitations</h2>
                            <p className="text-gray-700 mb-4">
                                SmartPost operates according to Meta’s Platform Policies. You acknowledge that:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Instagram may enforce rate limits</li>
                                <li>API changes may affect functionality</li>
                                <li>SmartPost cannot guarantee uninterrupted API access</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
