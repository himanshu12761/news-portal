"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BellIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NotificationModal from "./NotificationModal";
import NavButton from "./NavButton";
import MenuItem from "./MenuItem";
import Search from "./Search";

export default function LogoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filteredLinks, setFilteredLinks] = useState([]);
  const bellRef = useRef(null);
  const pathname = usePathname();

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const menuLinks = [
    { href: "/live", label: "LIVE" },
    { href: "/trendings", label: "Trendings News" },
    { href: "/videos", label: "Videos" },
    { href: "/", label: "Home" },
    { href: "/local-news", label: "Local-News" },
    { href: "/state-news", label: "State News" },
    { href: "/environment", label: "Environment" },
    { href: "/politics", label: "Politics & Government" },
    { href: "/opinions", label: "Opinions" },
    { href: "/middle-east", label: "Middle-East" },
    { href: "/business-technology", label: "Business & Technology" },
    { href: "/human-rights", label: "Human-Rights" },
    { href: "/sports", label: "Sports" },
    { href: "/world", label: "World" },
    { href: "/against-nation", label: "Against-Nation" },
    { href: "/yoga", label: "Yoga" },
    { href: "/art", label: "Art" },
    { href: "/defence", label: "Defence" },
    { href: "/judicary", label: "Judicary" },
    { href: "/travel", label: "Travel" },
    { href: "/lifestyle", label: "Lifestyle" },
    { href: "/books", label: "Books" },
    { href: "/portal-correspondent", label: "Portal Correspondent" },
    { href: "/podcast", label: "Podcast" },
  ];

  return (
    <div className="relative">
      {/* Top Nav Bar */}
      <div className="relative flex items-center justify-between bg-gray-300 px-4 py-3 z-50">
        {/* Left: Hamburger */}
        <button
          onClick={handleMenuToggle}
          className="p-1 sm:p-2 rounded hover:bg-gray-400 transition"
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6 text-black" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-black" />
          )}
        </button>

       {/* Search Component */}
       <div className="hidden lg:flex w-64">
          <Search links={menuLinks} onFilter={setFilteredLinks} />
        </div>

        {/* Center: Logo */}
        <Link href="/" className="flex items-center space-x-1 sm:space-x-2">
          <img
            src="/images/logo.png"
            alt="My Logo"
            className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
          />
          <span className="text-lg sm:text-2xl font-bold text-black">
            MyLogo <span className="hidden sm:inline">- The Next Gen</span>
          </span>
        </Link>

        {/* Right: Bell + Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <button
            ref={bellRef}
            onClick={() => setIsModalOpen(!isModalOpen)}
            className="p-1 sm:p-2 rounded-full hover:bg-gray-400 transition relative"
          >
            <BellIcon className="h-6 w-6 sm:h-7 sm:w-7 text-black hover:text-blue-600 hover:scale-110 transition" />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] sm:text-xs font-bold rounded-full px-1 py-0.5">
              3
            </span>
          </button>

          <NavButton
            label="Login"
            variant="secondary"
            onClick={() => alert("Login clicked")}
            className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm"
          />
          <NavButton
            label="Sign Up"
            variant="primary"
            onClick={() => alert("Sign Up clicked")}
            className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm"
          />
        </div>

        {/* Notification Modal */}
        <NotificationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          anchorRef={bellRef}
        />
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-4 left-0 h-full w-64 bg-gradient-to-b from-[rgb(195,72,72)] via-[rgb(153,204,255)] to-[rgb(111,126,149)] text-white shadow-lg z-40 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4 border-b border-white/20">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={closeMenu}>
            <XMarkIcon className="h-6 w-6 text-white" />
          </button>
        </div>
        <div className="p-2 text-center border-b bg-red-500">
        <h1>News Portal</h1> 
        </div>

        {/* Search Component */}
        <Search links={menuLinks} onFilter={setFilteredLinks} />

        {/* Links */}
        <nav className="flex flex-col p-4 space-y-2 overflow-y-auto overflow-x-hidden max-h-[calc(100vh-140px)]">
          {(filteredLinks.length > 0 ? filteredLinks : menuLinks).map((link) => (
            <MenuItem
              key={link.href}
              href={link.href}
              label={link.label}
              isActive={pathname === link.href}
              onClick={closeMenu}
            />
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
          onClick={closeMenu}
        />
      )}
    </div>
  );
}
