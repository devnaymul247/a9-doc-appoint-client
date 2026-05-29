import React from 'react';
import Link from 'next/link';
import { Button } from '@heroui/react';

const NotFoundPage = () => {
    return (
        <div className="min-h-[calc(100vh-200px)] bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-6">
            <div className="max-w-2xl w-full text-center">
                {/* 404 Number */}
                <div className="mb-8">
                    <h1 className="text-9xl md:text-[150px] font-bold text-[#0D7674] leading-none">
                        404
                    </h1>
                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                    Oops! Page Not Found
                </h2>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-lg mx-auto">
                    Sorry, the page you are looking for does not exist. It might have been moved or deleted.
                </p>

                {/* Subtext */}
                <p className="text-sm md:text-base text-gray-500 mb-12">
                    Lets get you back on track with DocAppoint
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/">
                        <Button className="bg-[#0D7674] hover:bg-[#0A5F5D] text-white px-8 py-6 text-lg font-semibold">
                            Back to Home
                        </Button>
                    </Link>
                    <Link href="/all-appointments">
                        <Button variant="bordered" className="border-[#0D7674] text-[#0D7674] hover:bg-[#0D7674] hover:text-white px-8 py-6 text-lg font-semibold">
                            Browse Appointments
                        </Button>
                    </Link>
                </div>

                {/* Additional Help Links */}
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
            </div>
        </div>
    );
};

export default NotFoundPage;