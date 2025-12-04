"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Import industry images
import educationImage from "../assets/industry/education.png";
import bankingImage from "../assets/industry/Banking.png";
import ecommerceImage from "../assets/industry/E-commerce.png";
import healthcareImage from "../assets/industry/healthcare.png";
import travelImage from "../assets/industry/Travel.png";

const industries = [
  {
    number: "01",
    title: "Education",
    description:
      "We build comprehensive learning management systems, school classroom platforms, and digital assessment tools, seamlessly integrating with ParentSquare, Canvas, Google Classroom, and more.",
    image: educationImage
  },

  {
    number: "02",
    title: "Banking & Fintech",
    description:
      "Our expertise spans digital banking apps, payment gateways, blockchain solutions, lending platforms, and custom fintech software that drive financial innovation.",
    image: bankingImage
  },
  {
    number: "03",
    title: "Retail & E-commerce",
    description:
      "From e-commerce websites to inventory management systems, CRM, ERP solutions, and AI-based communication tools, we power modern retail operations.",
    image: ecommerceImage
  },
  {
    number: "04",
    title: "Healthcare",
    description:
      "We develop cutting-edge healthcare solutions including EHR/EMR systems, telemedicine applications, and patient engagement platforms that improve care delivery and patient outcomes.",
    image: healthcareImage
  },

  {
    number: "05",
    title: "Travel & Hospitality",
    description:
      "We create custom booking engines, hotel management systems, and travel applications with seamless integration to GDS, payment gateways, and airline ticketing platforms.",
    image: travelImage
  }
];

export default function IndustryExpertise() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((item, index) => {
      if (!item) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => new Set([...prev, index]));
            }
          });
        },
        {
          threshold: 0.2,
          rootMargin: "0px 0px -100px 0px"
        }
      );

      observer.observe(item);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Where We Exceed{" "}
          <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent">
            Customers' Expectations
          </span>
        </h2>
        <div className="space-y-20">
          {industries.map((industry, index) => {
            const isVisible = visibleItems.has(index);
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                ref={(el: any) => (itemRefs.current[index] = el)}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12`}
              >
                <div className="flex-1">
                  <div className="relative">
                    <div
                      className={`absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 shadow-lg shadow-red-500/30 transition-all duration-700 ${
                        isVisible
                          ? "opacity-100 scale-100 rotate-0"
                          : "opacity-0 scale-0 rotate-180"
                      }`}
                    >
                      {industry.number}
                    </div>
                    <div
                      className={`bg-black border border-red-500/30 rounded-xl overflow-hidden aspect-video relative transition-all duration-700 ${
                        isVisible
                          ? "opacity-100 translate-x-0 translate-y-0"
                          : `opacity-0 ${
                              isEven ? "-translate-x-12" : "translate-x-12"
                            } translate-y-8`
                      }`}
                    >
                      <Image
                        src={industry.image}
                        alt={industry.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </div>
                <div
                  className={`flex-1 transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-x-0 translate-y-0"
                      : `opacity-0 ${
                          isEven ? "translate-x-12" : "-translate-x-12"
                        } translate-y-8`
                  }`}
                >
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {industry.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
