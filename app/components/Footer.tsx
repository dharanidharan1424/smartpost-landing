import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white text-gray-700">
            <div className="container">
                <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold font-display">SmartPost</span>
                        </div>
                        <p className="text-gray-600 max-w-md mb-4">
                            Empowering agencies to manage their clients' Instagram presence with automated, consistent daily posting.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-300"
                                aria-label="Twitter"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-300"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-300"
                                aria-label="Instagram"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="17.5" cy="6.5" r="1.5" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4 font-display">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/#features" className="text-gray-600 hover:text-sky-600 transition-colors duration-300">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="/#how-it-works" className="text-gray-400 hover:text-white transition-colors duration-300">
                                    How It Works
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://app.smartpost.co.in"
                                    className="text-gray-600 hover:text-sky-600 transition-colors duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Get Started
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4 font-display">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy-policy" className="text-gray-600 hover:text-sky-600 transition-colors duration-300">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-gray-600 hover:text-sky-600 transition-colors duration-300">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-600 text-sm">
                            © {currentYear} SmartPost. All rights reserved.
                        </p>
                        <p className="text-gray-600 text-sm">
                            Made with ❤️ for agencies worldwide
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
