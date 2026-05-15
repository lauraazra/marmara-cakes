import React, { useState } from "react";
import {
  Users,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  MessageSquare,
  Box,
  Layout,
} from "lucide-react"; // Pake lucide-react biar gampang

const TEAM_MEMBERS = [
  {
    name: "Sofia Alvarez",
    role: "Growth Lead",
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=1200&q=80",
    icon: <Users className="h-3 w-3 text-lime-300" />,
  },
  {
    name: "Jackson Mitchel",
    role: "AI Lead",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=1200&q=80",
    icon: <Box className="h-3 w-3 text-lime-300" />,
  },
  {
    name: "Jenny Doe",
    role: "Product Head",
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=1200&q=80",
    icon: <Briefcase className="h-3 w-3 text-lime-300" />,
    featured: true,
  },
  {
    name: "Armenia Sean",
    role: "Social Media Head",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80",
    icon: <MessageSquare className="h-3 w-3 text-lime-300" />,
  },
  {
    name: "Maya Patel",
    role: "Design Lead",
    img: "https://images.unsplash.com/photo-1541534401786-2077eed87a2d?w=1200&q=80",
    icon: <Layout className="h-3 w-3 text-lime-300" />,
  },
  {
    name: "Liam Becker",
    role: "Platform Engineer",
    img: "https://images.unsplash.com/photo-1544005316-04d7f94c1d27?w=1200&q=80",
    icon: <Box className="h-3 w-3 text-lime-300" />,
  },
];

const Swiper = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % TEAM_MEMBERS.length);
  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + TEAM_MEMBERS.length) % TEAM_MEMBERS.length,
    );

  const getCardStyle = (index) => {
    const relativePos = index - currentIndex;

    // Logic 3D Transform
    let style = {
      transform: `translateX(${relativePos * 180}px) scale(0.75) rotateY(${-relativePos * 15}deg)`,
      opacity: 0,
      filter: "brightness(0.5)",
      zIndex: 1,
    };

    if (relativePos === 0) {
      style = {
        transform: "translateX(0) scale(1) rotateY(0deg)",
        opacity: 1,
        zIndex: 10,
        filter: "brightness(1)",
        boxShadow: "0 20px 60px rgba(163,230,53,0.3)",
      };
    } else if (Math.abs(relativePos) === 1) {
      style = {
        transform: `translateX(${relativePos * 180}px) scale(0.9) rotateY(${-relativePos * 10}deg)`,
        opacity: 0.6,
        zIndex: 5,
        filter: "brightness(0.75)",
      };
    } else if (Math.abs(relativePos) === 2) {
      style = {
        transform: `translateX(${relativePos * 180}px) scale(0.85) rotateY(${-relativePos * 20}deg)`,
        opacity: 0.4,
        zIndex: 2,
        filter: "brightness(0.6)",
      };
    }

    return style;
  };

  return (
    <div className="max-w-7xl mx-auto text-center">
      <div
        className="flex relative items-center justify-center"
        style={{ perspective: "1200px" }}
      >
        <button
          onClick={prevSlide}
          className="absolute left-4 z-20 h-12 w-12 flex items-center justify-center rounded-full bg-black/50 ring-1 ring-white/10 hover:bg-white/5 transition"
        >
          <ChevronLeft className="h-5 w-5 text-lime-300" />
        </button>

        <div className="relative w-full max-w-md h-[500px] flex items-center justify-center">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={index}
              className={`carousel-card absolute rounded-2xl overflow-hidden transition-all duration-500 ease-out ${
                index === currentIndex
                  ? "ring-2 ring-lime-300/40 bg-lime-400/10"
                  : "ring-1 ring-white/10"
              }`}
              style={getCardStyle(index)}
            >
              <img
                src={member.img}
                alt={member.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

              {member.featured && index === currentIndex && (
                <div className="absolute top-6 right-6">
                  <span className="bg-lime-400 text-neutral-950 px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1">
                    ★ Featured
                  </span>
                </div>
              )}

              <div className="absolute bottom-8 left-8 right-8 text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/20 backdrop-blur-md mb-3">
                  {member.icon}
                  <span className="text-white">{member.role}</span>
                </div>
                <p
                  className={`${index === currentIndex ? "text-3xl" : "text-xl"} font-bold text-white tracking-tight`}
                >
                  {member.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-4 z-20 h-12 w-12 flex items-center justify-center rounded-full bg-black/50 ring-1 ring-white/10 hover:bg-white/5 transition"
        >
          <ChevronRight className="h-5 w-5 text-lime-300" />
        </button>
      </div>
    </div>
  );
};

export default Swiper;
