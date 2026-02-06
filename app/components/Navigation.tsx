'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
            <div className="container">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <span className="text-lg font-semibold text-gray-900 font-display">SmartPost</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/#features" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                            Features
                        </Link>
                        <Link href="/#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                            How It Works
                        </Link>
                        <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                            Privacy
                        </Link>
                        <Link href="/terms" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                            Terms
                        </Link>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <a
                            href="https://app.smartpost.co.in"
                            className="btn btn-primary"
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-900 p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <div className="flex flex-col gap-4">
                            <Link
                                href="/#features"
                                className="text-gray-600 hover:text-gray-900 transition-colors py-2 text-sm font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Features
                            </Link>
                            <Link
                                href="/#how-it-works"
                                className="text-gray-600 hover:text-gray-900 transition-colors py-2 text-sm font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                How It Works
                            </Link>
                            <Link
                                href="/privacy-policy"
                                className="text-gray-600 hover:text-gray-900 transition-colors py-2 text-sm font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Privacy
                            </Link>
                            <Link
                                href="/terms"
                                className="text-gray-600 hover:text-gray-900 transition-colors py-2 text-sm font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Terms
                            </Link>
                            <a
                                href="https://app.smartpost.co.in"
                                className="btn btn-primary mt-2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
