"use client";
import { useState } from "react";
import MenuItem from "./MenuItem";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const menuLinks = [
    { href: "/", label: "Home" },
    { href: "/local-news", label: "Local-News" },
    { href: "/environment", label: "Environment" },
    { href: "/politics", label: "Politics & Government" },
    { href: "/opinions", label: "Opinions" },
    { href: "/middle-east", label: "Middle-East" },
    { href: "/business-technology", label: "Business & Technology" },
    { href: "/human-rights", label: "Human-Rights" },
    { href: "/sports", label: "Sports" },
    { href: "/world", label: "World" },
    { href: "/against-nation", label: "Against-Nation" },
  ];

  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname || "/");
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (href) => {
    setActiveLink(href);
  };

  return (
    <nav
      className="relative hidden md:block text-black bg-white overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-full border-b-4 border-red-100 mt-2">
        <div className={`flex whitespace-nowrap w-max animate-scroll ${isHovered ? "paused" : ""}`}>
          {/* Duplicate items twice to create seamless loop */}
          {[...menuLinks, ...menuLinks].map((link, index) => (
            <MenuItem
              key={link.href + index}
              href={link.href}
              label={link.label}
              isActive={activeLink === link.href}
              onClick={() => handleClick(link.href)}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 50s linear infinite;
        }
        .paused {
          animation-play-state: paused !important;
        }
      `}</style>
    </nav>
  );
}
