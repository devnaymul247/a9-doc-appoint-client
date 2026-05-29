import React from 'react';
import { FaBolt, FaCalendarCheck, FaShieldAlt, FaUserMd } from 'react-icons/fa';

const features = [
    {
        icon: <FaBolt size={18} />,
        title: 'Fast Booking',
        desc: 'Find and book appointments in seconds — no waiting on hold.',
    },
    {
        icon: <FaUserMd size={18} />,
        title: 'Verified Doctors',
        desc: 'Quality practitioners verified for credentials and reviews.',
    },
    {
        icon: <FaShieldAlt size={18} />,
        title: 'Secure Records',
        desc: 'Your medical data is encrypted and stored with care.',
    },
    {
        icon: <FaCalendarCheck size={18} />,
        title: 'Easy Scheduling',
        desc: 'Flexible rescheduling and reminders so you never miss a visit.',
    },
];

const WhyChooseSection = () => {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-[#0D7674]">Why Choose DocAppoint</h2>
                    <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                        Trusted, convenient and secure — everything you need to manage healthcare appointments with confidence.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                    {features.map((f, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-start gap-4 p-6 border border-gray-100 rounded-lg hover:shadow-lg transition"
                        >
                            <div className="w-12 h-12 rounded-full bg-[#0D7674] text-white flex items-center justify-center">
                                {f.icon}
                            </div>
                            <h3 className="font-semibold text-lg text-[#0D7674]">{f.title}</h3>
                            <p className="text-gray-600 text-sm">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;