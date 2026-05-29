'use client'
import React from 'react';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { BiError } from 'react-icons/bi';

const ErrorPage = ({ error, reset }) => {
    return (
        <div className="min-h-[calc(100vh-200px)] bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-6">
            <div className="max-w-2xl w-full text-center">
                {/* Error Icon */}
                <div className="mb-8 flex justify-center mt-6">
                    <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center">
                        <BiError className="text-4xl text-red-600"/>
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Oops! Something Went Wrong
                </h1>

                {/* Error Message */}
                <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-lg mx-auto">
                    {error?.message || "We encountered an unexpected error. Please try again."}
                </p>

                {/* Subtext */}
                <p className="text-sm md:text-base text-gray-500 mb-12">
                    Our team has been notified. Try refreshing or going back to continue.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button 
                        onClick={() => reset()}
                        className="bg-[#0D7674] hover:bg-[#0A5F5D] text-white px-8 py-6 text-lg font-semibold"
                    >
                        Try Again
                    </Button>
                    <Link href="/all-appointments">
                        <Button variant="bordered" className="border-[#0D7674] text-[#0D7674] hover:bg-[#0D7674] hover:text-white px-8 py-6 text-lg font-semibold">
                            Back to Appointments
                        </Button>
                    </Link>
                </div>

                {/* Additional Help */}
                <div className="mt-16 pt-12 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-4">Need Help?</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/" className="text-[#0D7674] hover:text-[#0A5F5D] font-medium">
                            Home
                        </Link>
                        <span className="text-gray-300">•</span>
                        <Link href="/all-appointments" className="text-[#0D7674] hover:text-[#0A5F5D] font-medium">
                            Appointments
                        </Link>
                        <span className="text-gray-300">•</span>
                        <Link href="/dashboard" className="text-[#0D7674] hover:text-[#0A5F5D] font-medium">
                            Dashboard
                        </Link>
                    </div>
                </div>

                {/* Error Details (Development Only) */}
                {process.env.NODE_ENV === 'development' && (
                    <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
                        <p className="text-xs font-mono text-red-600">
                            Error: {error?.message}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ErrorPage;