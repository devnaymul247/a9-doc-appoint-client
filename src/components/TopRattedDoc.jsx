import React from 'react';
import AppointmentCard from '@/components/AppointmentCard';
import { FaStar } from 'react-icons/fa';

const TopRattedDoc = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctor-appointments`, {
        method: 'GET',
        headers: { 'content-type': 'application/json' }
    });
    const appointments = await res.json();

    const topRated = appointments
        .filter(a => typeof a.rating === 'string')
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);

    return (
        <section className="max-w-7xl mx-auto my-8">
            <h2 className="text-2xl font-bold mb-2 text-center">Top Rated Doctors</h2>
            <p className="text-center text-muted-foreground mb-6">Our top doctors based on patient ratings</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {topRated.map(appointment => (
                    <div key={appointment._id} className="relative">
                        <div className="absolute top-3 right-3 bg-yellow-400 text-black rounded-full px-3 py-1 font-semibold flex items-center gap-1 z-10 shadow">
                            <FaStar /> <span>{appointment.rating}</span>
                        </div>
                        <AppointmentCard appointment={appointment} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TopRattedDoc;