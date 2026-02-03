'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-dark">
            <div className="container">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold text-white font-display">SmartPost</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/#features" className="text-white/80 hover:text-white transition-colors duration-300">
                            Features
                        </Link>
                        <Link href="/#how-it-works" className="text-white/80 hover:text-white transition-colors duration-300">
                            How It Works
                        </Link>
                        <Link href="/privacy-policy" className="text-white/80 hover:text-white transition-colors duration-300">
                            Privacy
                        </Link>
                        <Link href="/terms" className="text-white/80 hover:text-white transition-colors duration-300">
                            Terms
                        </Link>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <a
                            href="https://app.smartpost.co.in"
                            className="btn btn-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2"
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
                    <div className="md:hidden py-4 border-t border-white/10 animate-fadeIn">
                        <div className="flex flex-col gap-4">
                            <Link
                                href="/#features"
                                className="text-white/80 hover:text-white transition-colors duration-300 py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Features
                            </Link>
                            <Link
                                href="/#how-it-works"
                                className="text-white/80 hover:text-white transition-colors duration-300 py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                How It Works
                            </Link>
                            <Link
                                href="/privacy-policy"
                                className="text-white/80 hover:text-white transition-colors duration-300 py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Privacy
                            </Link>
                            <Link
                                href="/terms"
                                className="text-white/80 hover:text-white transition-colors duration-300 py-2"
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
