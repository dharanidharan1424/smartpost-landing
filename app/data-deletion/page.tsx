import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Data Deletion Instructions - SmartPost",
    description: "SmartPost Data Deletion - Instructions on how to request deletion of your account and associated data.",
};

export default function DataDeletion() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Spacer for fixed navigation */}
            <div className="h-24"></div>
            <div className="container py-16">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl font-bold mb-4 text-gray-900">Data Deletion Instructions</h1>
                        <p className="text-gray-600 text-lg">
                            Last Updated: February 3, 2026
                        </p>
                    </div>

                    {/* Content */}
                    <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
                        <section className="mb-10">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                SmartPost provides an easy way for users to request deletion of their account data in compliance with Meta Platform Policies and global privacy standards.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                If you wish to delete your SmartPost account and all associated data, please follow the steps below:
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-6 text-gray-900">How to Request Data Deletion</h2>

                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">Option 1 — Delete Your Account Through SmartPost</h3>
                                <p className="text-gray-700 mb-3">If you have access to your account:</p>
                                <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
                                    <li>Login to your SmartPost account</li>
                                    <li>Go to <strong>Settings</strong> → <strong>Account</strong></li>
                                    <li>Click <strong>Delete Account</strong></li>
                                </ol>
                                <p className="text-gray-700 italic">
                                    Your account and all associated data (including stored Instagram tokens) will be permanently deleted within 30 days.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">Option 2 — Request Manual Deletion (if you cannot access your account)</h3>
                                <p className="text-gray-700 mb-3">If you no longer have access to your SmartPost account:</p>
                                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-4">
                                    <p className="text-gray-700 mb-2">Send an email to:</p>
                                    <p className="text-gray-900 font-medium mb-4">📩 privacy@smartpost.co.in</p>

                                    <p className="text-gray-700 mb-2">With the subject:</p>
                                    <p className="text-gray-900 font-medium mb-4">“Data Deletion Request”</p>

                                    <p className="text-gray-700 mb-2">Include the following:</p>
                                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                                        <li>Your SmartPost account email</li>
                                        <li>Confirmation you want all data deleted</li>
                                    </ul>
                                </div>
                                <p className="text-gray-700">
                                    We will delete your account and data within 30 days and send a confirmation email.
                                </p>
                            </div>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">What Data Gets Deleted?</h2>
                            <p className="text-gray-700 mb-4">When you request deletion, we remove:</p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Your SmartPost account</li>
                                <li>Instagram access tokens</li>
                                <li>Connected Instagram Business Account ID</li>
                                <li>Uploaded media and captions</li>
                                <li>Scheduled posts</li>
                                <li>Analytics and logs associated with your account</li>
                                <li>Profile information</li>
                            </ul>
                            <p className="text-gray-700 mt-4 text-sm text-gray-500">
                                Only anonymized system logs may remain for security or legal reasons.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">Instagram Data Deletion (Meta Requirement)</h2>
                            <p className="text-gray-700 mb-4">Deleting your SmartPost account also deletes:</p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                                <li>All Instagram tokens</li>
                                <li>Permissions granted to SmartPost</li>
                                <li>All data retrieved via Instagram Graph API</li>
                            </ul>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <p className="text-gray-700">
                                    You can also manually revoke SmartPost’s access from:<br />
                                    <strong>Instagram App → Settings → Security → Apps and Websites</strong>
                                </p>
                            </div>
                        </section>

                        <section className="mb-0">
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">Contact</h2>
                            <p className="text-gray-700 mb-2">
                                For any questions about data deletion or privacy, contact us:
                            </p>
                            <a href="mailto:hello@smartpost.co.in" className="text-blue-600 font-medium hover:underline">
                                📩 hello@smartpost.co.in
                            </a>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
