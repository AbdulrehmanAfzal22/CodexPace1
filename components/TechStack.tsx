"use client";

import { useEffect, useRef } from "react";

const techStack = [
  "django",
  "react",
  "nextjs",
  "mern",
  "node",
  "python",
  "docker",
  "kubernetes",
  "vue",
  "angular",
  "typescript",
  "javascript",
  "php",
  "aws",
  "azure",
  "gcp",
  "express",
  "mongodb",
  "postgresql",
  "mysql",
  "redis"
];

export default function TechStack() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const itemWidth = 192; // 168px width + 24px gap

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Calculate total width of one set of items for seamless loop
    const totalWidth = techStack.length * itemWidth;
    let position = 0;
    let animationId: number;
    let lastTime = performance.now();
    const speed = 30; // pixels per second

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000; // Convert to seconds
      lastTime = currentTime;

      position += speed * deltaTime;

      // Reset position when we've scrolled through one full set
      if (position >= totalWidth) {
        position = 0;
      }

      slider.style.transform = `translateX(-${position}px)`;

      animationId = requestAnimationFrame(animate);
    };

    // Start animation after a short delay
    const startDelay = setTimeout(() => {
      animationId = requestAnimationFrame(animate);
    }, 1500);

    return () => {
      clearTimeout(startDelay);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [itemWidth]);

  // Create duplicated array for seamless scrolling
  const duplicatedStack = [...techStack, ...techStack, ...techStack];

  return (
    <section className="py-20 bg-black relative">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          What solutions{" "}
          <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent">
            Do you need
          </span>
        </h2>
      </div>

      {/* Slider Container - Full Width */}
      <div 
        className="relative overflow-hidden py-2"
        style={{ 
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          paddingLeft: '1rem',
          paddingRight: '1rem'
        }}
      >
        <div
          ref={sliderRef}
          className="flex gap-6"
          style={{
            willChange: 'transform',
            transform: 'translateX(0px)'
          }}
        >
          {duplicatedStack.map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="flex-shrink-0 bg-black border border-red-500/50 rounded-full px-8 py-4 hover:border-red-500 hover:shadow-xl hover:shadow-red-500/30 hover:-translate-y-1 transition-all duration-300 transform"
              style={{
                width: "168px",
                boxShadow:
                  "0 4px 12px rgba(220, 38, 38, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
              }}
            >
              <span className="text-white font-semibold text-lg tracking-wide whitespace-nowrap block text-center">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
