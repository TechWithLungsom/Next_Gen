"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const feedUpdates = [
  {
    id: 1,
    category: "@StartUp",
    date: "April 2026",
    title: "Milestone Day at APIIP Itanagar",
    caption: "Presenting Vernovate's infrastructure roadmap at Arunachal Pradesh's premier incubator for strategic growth guidance.",
    img: "https://res.cloudinary.com/dgmftp80m/image/upload/v1783259897/APIIP_m7fdxg.jpg", 
    tags: ["Vernovate", "APIIP", "StartupLife"],
  },
  {
    id: 2,
    category: "@TechInfrastructure",
    date: "April 2026",
    title: "Ecosystem Deep-Dive at STPI",
    caption: "Discussing advanced tech incubation workflows, plug-and-play spaces, and R&D infrastructure support paths.",
    img: "https://res.cloudinary.com/dgmftp80m/image/upload/v1783259897/STPI_hsxpqv.jpg",
    tags: ["STPI", "DeepTech", "R&D"],
  },
  {
    id: 3,
    category: "@Networking",
    date: "July 2026",
    title: "Startup Strategy Session",
    caption: "Exchanging regional scaling insights and market execution frameworks with leadership from GoArunachal.",
    img: "https://res.cloudinary.com/dgmftp80m/image/upload/v1783259949/GoArunachal_bqakk8.jpg",
    tags: ["Networking", "Strategy", "GoArunachal"],
  }
];

export default function ActivityFeedPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollAmount = direction === "left" ? -380 : 380;
      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="activity" className="py-20 px-6 relative overflow-x-hidden selection:bg-purple-500/30 bg-[#020202]">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Header Block with Control Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Activity <span className="text-purple-500">Feed</span>
            </h2>
            <p className="text-gray-400 mt-2 text-sm md:text-base">
              Visual snapshots of my professional highlights and ecosystem footprints.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-purple-400 hover:border-purple-500/30 transition-all duration-300 shadow-md backdrop-blur-sm"
              aria-label="Scroll Left"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-purple-400 hover:border-purple-500/30 transition-all duration-300 shadow-md backdrop-blur-sm"
              aria-label="Scroll Right"
            >
              →
            </button>
          </div>
        </div>

        {/* Horizontal Slider / Carousel Container */}
        <motion.div 
          ref={scrollRef}
          drag="x"
          dragConstraints={{ right: 0, left: -400 }}
          className="flex gap-6 cursor-grab active:cursor-grabbing py-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory items-stretch"
          style={{ scrollbarWidth: 'none' }} 
        >
          {feedUpdates.map((post) => (
            <div
              key={post.id}
              className="w-[320px] md:w-[380px] flex-shrink-0 snap-start rounded-2xl bg-white/5 border border-white/10 overflow-hidden shadow-xl backdrop-blur-md hover:border-purple-500/50 transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Internal layout switch: No global absolute overlays so content flows naturally */}
              <div>
                {/* Large Fixed Image Area */}
                <div className="relative h-72 w-full bg-purple-900/10 overflow-hidden border-b border-white/5">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                    sizes="(max-width: 768px) 320px, 380px"
                  />
                </div>

                {/* Content Block Area - Now pushes downwards normally with no line limits */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest bg-purple-500/10 px-2.5 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono">
                      {post.date}
                    </span>
                  </div>
                  
                  <h3 className="text-white font-bold text-xl leading-tight group-hover:text-purple-300 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 text-xs md:text-sm mt-3 leading-relaxed">
                    {post.caption}
                  </p>
                </div>
              </div>

              {/* Secure Footer Section for Tags */}
              <div className="px-6 pb-6 pt-2">
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs text-purple-400/90 font-mono">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </motion.div>

        {/* Swipe Assist Indicator */}
        <div className="flex items-center justify-center gap-2 mt-6 text-xs text-gray-500 pointer-events-none">
          <span>← Swipe or use buttons to browse →</span>
        </div>

      </div>
    </section>
  );
}