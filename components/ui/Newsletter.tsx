'use client';

import { useState } from 'react';

interface NewsletterProps {
    title?: string;
    description?: string;
}

export function Newsletter({ title, description }: NewsletterProps) {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) {
            setStatus('error');
            setMessage('Please enter your email address');
            return;
        }

        setStatus('loading');
        setMessage('');

        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setMessage(data.message);
                setEmail(''); // Clear input
            } else {
                setStatus('error');
                setMessage(data.error || 'Failed to subscribe');
            }
        } catch (error) {
            setStatus('error');
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                {title || 'Stay Updated'}
            </h2>
            <p className="text-xl mb-8 text-primary-100 leading-relaxed">
                {description || 'Subscribe to our newsletter and get the latest insights, tips, and resources delivered to your inbox.'}
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white text-neutral-900"
                    disabled={status === 'loading'}
                />
                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-8 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
            </form>
            {message && (
                <p className={`mt-4 text-sm ${status === 'success' ? 'text-green-300' : 'text-red-300'}`}>
                    {message}
                </p>
            )}
        </div>
    );
}
