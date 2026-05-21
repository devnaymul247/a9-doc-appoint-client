import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Slide = () => {
    return (
        <>
            {/* Overlay */}
            <div className="w-full min-h-screen bg-black/50 flex items-center justify-center">
                <div className="text-center text-white px-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Book Your Doctor Appointment
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200">
                        Easily schedule appointments with qualified healthcare professionals. Manage your health at your convenience.
                    </p>

                    <div className="flex gap-4 justify-center">
                        <Link href="/all-appointments">
                            <Button className="bg-[#0D7674] hover:bg-[#0A5F5D]">
                                View Appointments
                            </Button>
                        </Link>

                        <Link href="#">
                            <Button variant="outline" className="text-white">
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slide;