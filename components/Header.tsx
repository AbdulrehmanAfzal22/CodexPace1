"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const servicesList = [
  { name: "Front & Backend Development", slug: "front-backend-development" },
  {
    name: "Android & iOS App Development",
    slug: "android-ios-app-development"
  },
  { name: "Software Testing", slug: "software-testing" },

  { name: "Custom Software Development", slug: "custom-software-development" },
  {
    name: "AI & Machine Learning Development",
    slug: "ai-machine-learning-development"
  },
  // { name: "Blockchain Development", slug: "blockchain-development" },

  { name: "DevOps & Cloud Services", slug: "devops-cloud-services" },
  { name: "System Integration", slug: "system-integration" },
  { name: "MVP Development", slug: "mvp-development" },
  {
    name: "Scalable Enterprise Software",
    slug: "enterprise-software-development"
  }
];

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="relative z-50 backdrop-blur-2xl">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0, 0, 0, 0.85) 0%, rgba(20, 0, 0, 0.82) 50%, rgba(0, 0, 0, 0.85) 100%)"
        }}
      ></div>
      <nav className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.jpeg"
              alt="CodeXpace Logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="text-white text-base font-bold">CodeXpace</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className={`font-semibold text-sm transition-colors ${
                isActive("/") ? "text-red-400" : "text-white hover:text-red-400"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-semibold text-sm transition-colors ${
                isActive("/about")
                  ? "text-red-400"
                  : "text-white hover:text-red-400"
              }`}
            >
              About Us
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`font-semibold text-sm transition-colors flex items-center space-x-1 ${
                  isServicesOpen || isActive("/services")
                    ? "text-red-400"
                    : "text-white hover:text-red-400"
                }`}
              >
                <span>Services</span>
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-72 bg-black/95 backdrop-blur-xl border border-red-500/30 rounded-lg shadow-2xl py-3"
                  style={{
                    boxShadow:
                      "0 8px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(220, 38, 38, 0.2)"
                  }}
                >
                  {servicesList.map((service, index) => (
                    <Link
                      key={index}
                      href={`/services/${service.slug}`}
                      className="block px-4 py-2.5 text-white text-sm hover:bg-red-500/10 hover:text-red-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/success-stories"
              className={`font-semibold text-sm transition-colors ${
                isActive("/success-stories")
                  ? "text-red-400"
                  : "text-white hover:text-red-400"
              }`}
            >
              Case Studies
            </Link>
            <Link
              href="/careers"
              className={`font-semibold text-sm transition-colors ${
                isActive("/careers")
                  ? "text-red-400"
                  : "text-white hover:text-red-400"
              }`}
            >
              Join Our Team
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-5 py-2 rounded-lg font-medium text-sm transition-all flex items-center space-x-1.5 shadow-lg shadow-red-500/20 hover:shadow-xl hover:shadow-red-500/30 hover:scale-105 transform"
          >
            <span>BOOK A MEETING</span>
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </nav>
    </header>
  );
}
