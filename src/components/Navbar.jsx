'use client';
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaUserDoctor } from "react-icons/fa6";


const Navbar = () => {

  //   const userData = authClient.useSession();
  // const user = userData.data?.user;

  // const handleSignOut = async () => {
  //   await authClient.signOut();
  // };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="flex items-center gap-3">
            <Image
              src="/doc-appoint-logo.png"
              alt="DocAppoint Logo"
              width={32}
              height={32}
            />  
            <p className="font-bold text-xl">DocAppoint</p>
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          <li>
            <Link href="/" className="font-medium hover:text-[#0D7674] text-[#0D7674]" aria-current="page">
              Home
            </Link>
          </li>
          <li>
            <Link href="/all-appointments" className="hover:text-[#0D7674]">All Appointments</Link>
          </li>
          <li>
            <Link href="/dashboard" className="hover:text-[#0D7674]">Dashboard</Link>
          </li>
        </ul>
        <div className="hidden items-center gap-4 md:flex">
          <Link href="/signin" className="block py-2 text-center hover:text-[#0D7674]">
                Login
              </Link>

              <Link href="/signup" className="block py-2">
              <Button className="bg-[#0D7674] hover:bg-[#0A5F5D]">Sign Up</Button>
              </Link>
        </div>
      </header>

      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link href="/" className="block py-2 font-medium text-[#0D7674]" aria-current="page">
                Home
              </Link>
            </li>
            <li>
              <Link href="/all-appointments" className="block py-2 hover:text-[#0D7674]">
                All Appointments
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="block py-2 hover:text-[#0D7674]">
                Dashboard
              </Link>
            </li>
          </ul>
          
          
            <div className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
              <Link href="/signin" className="block py-2 text-center hover:text-[#0D7674]">
                Login
              </Link>

              <Link href="/signup" className="block py-2">
              <Button className="w-full bg-[#0D7674] hover:bg-[#0A5F5D]">Sign Up</Button>
              </Link>
            </div>

          {/* {'' && (
            <div className="flex gap-3">
              <Avatar size="sm">
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button onClick={''} size="sm" variant="danger">SignOut</Button>
            </div>
          )} */}

        </div>
      )}
    </nav>
  );
};

export default Navbar;