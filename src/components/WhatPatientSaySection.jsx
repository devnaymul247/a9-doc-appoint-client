import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const reviews = [
  {
    name: 'Ayesha Khan',
    role: 'Working Professional',
    text: 'DocAppoint made booking a doctor so easy and fast. I never have to wait long for confirmation.',
    rating: 5,
  },
  {
    name: 'Rahim Ali',
    role: 'Parent',
    text: 'The reminders and doctor profiles helped me choose the best care for my family.',
    rating: 5,
  },
  {
    name: 'Nadia Sharma',
    role: 'Student',
    text: 'I appreciate the secure records and easy rescheduling feature. It feels professional and safe.',
    rating: 4,
  },
  {
    name: 'Imran Yusuf',
    role: 'Entrepreneur',
    text: 'The patient dashboard is simple, clear, and keeps everything in one place. Great service.',
    rating: 5,
  },
  {
    name: 'Sara Patel',
    role: 'Teacher',
    text: 'Finding a specialist and booking an appointment was effortless. Highly recommended.',
    rating: 5,
  },
  {
    name: 'Omer Hassan',
    role: 'Freelancer',
    text: 'Great experience from start to finish. The mobile-friendly interface is a real plus.',
    rating: 4,
  },
];

const WhatPatientSaySection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-[#0D7674]">Patient Reviews</p>
          <h2 className="text-3xl font-bold text-[#0D7674] mt-3">What Patient Say</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Hear from patients who trust DocAppoint for fast appointments, verified providers, and secure care management.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <article
              key={index}
              className="relative rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute -top-3 left-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0D7674] text-white shadow-lg">
                <FaQuoteLeft size={18} />
              </div>
              <div className="mt-8">
                <div className="flex items-center gap-1 text-[#0D7674] mb-3">
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <FaStar
                      key={starIdx}
                      size={14}
                      className={starIdx < review.rating ? 'text-[#0D7674]' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <p className="text-gray-700 leading-7">{review.text}</p>
              </div>

              <div className="mt-6 border-t border-gray-100 pt-4">
                <p className="font-semibold text-[#0D7674]">{review.name}</p>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatPatientSaySection;
