'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/doc-appoint-logo.png"
                alt="DocAppoint Logo"
                width={60}
                height={60}
              />
              <p className="font-bold text-xl text-[#0D7674]">DocAppoint</p>
            </div>
            <p className="text-gray-600 text-sm">
              Book and manage doctor appointments with ease. Your health, our priority.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-[#0D7674] text-white flex items-center justify-center hover:bg-[#0A5F5D] transition"
                aria-label="Facebook"
              >
                <FaFacebook size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-[#0D7674] text-white flex items-center justify-center hover:bg-[#0A5F5D] transition"
                aria-label="Twitter"
              >
                <FaTwitter size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-[#0D7674] text-white flex items-center justify-center hover:bg-[#0A5F5D] transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-[#0D7674] text-white flex items-center justify-center hover:bg-[#0A5F5D] transition"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg text-[#0D7674] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#0D7674] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/all-appointments" className="text-gray-600 hover:text-[#0D7674] transition">
                  Appointments
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-600 hover:text-[#0D7674] transition">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg text-[#0D7674] mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#0D7674] transition">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#0D7674] transition">
                  Find Doctors
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#0D7674] transition">
                  Medical Records
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg text-[#0D7674] mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Email: info@docappoint.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Health St, Medical City, MC 12345</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              &copy; 2026 DocAppoint. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-600 hover:text-[#0D7674] transition">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#0D7674] transition">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#0D7674] transition">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;