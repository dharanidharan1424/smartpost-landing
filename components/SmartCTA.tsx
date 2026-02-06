"use client";

import { useEffect, useState } from 'react';

export default function SmartCTA() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for session_active cookie
        // Since it's not HttpOnly, we can read it here
        const checkAuth = () => {
            try {
                // Simple check: does cookie string contain session_active=true?
                // Note: In production with subdomain, the cookie should be visible if domain is set correctly.
                const hasSession = document.cookie.split(';').some(c => {
                    return c.trim().startsWith('session_active=true');
                });
                setIsAuthenticated(hasSession);
            } catch (e) {
                console.error('Error checking auth', e);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    if (loading) {
        // Optional: Skeleton or just default "Get Started" to avoid flickering?
        // "Get Started" is safe default.
        return (
            <a href="https://app.smartpost.co.in/signup" className="btn btn-primary btn-lg">
                Get Started Free
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </a>
        );
    }

    if (isAuthenticated) {
        return (
            <a href="https://app.smartpost.co.in/dashboard" className="btn btn-primary btn-lg bg-sky-600 hover:bg-sky-700 border-sky-600">
                Go to Dashboard
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </a>
        );
    }

    return (
        <a href="https://app.smartpost.co.in/signup" className="btn btn-primary btn-lg">
            Get Started Free
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
        </a>
    );
}
