"use client";

import { useRef, useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function NotificationModal({ isOpen, onClose, anchorRef }) {
  const modalRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [show, setShow] = useState(false); // Controls animation

  // Handle open/close animation timing
  useEffect(() => {
    if (isOpen) {
      setShow(true); // fade in immediately
    } else {
      // fade out before unmounting
      const timeout = setTimeout(() => setShow(false), 200); // match CSS duration
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  // Recalculate modal position
  useEffect(() => {
    function updatePosition() {
      if (anchorRef.current && isOpen) {
        const anchorRect = anchorRef.current.getBoundingClientRect();
        const modalWidth = 260; // default width
        const viewportWidth = window.innerWidth;

        let left = anchorRect.left;
        if (left + modalWidth > viewportWidth - 10) {
          left = viewportWidth - modalWidth - 10;
        }
        if (left < 10) left = 10;

        setPosition({
          top: anchorRect.bottom + window.scrollY + 8,
          left: left + window.scrollX,
        });
      }
    }

    if (isOpen) {
      updatePosition();
      window.addEventListener("resize", updatePosition);
      window.addEventListener("scroll", updatePosition, true);
    }

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [isOpen, anchorRef]);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        anchorRef.current &&
        !anchorRef.current.contains(event.target)
      ) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose, anchorRef]);

  if (!show) return null;

  return (
    <div
      ref={modalRef}
      className={`fixed w-64 sm:w-80 bg-white rounded-lg shadow-lg border z-50 
                  transition-all duration-200 ease-out 
                  ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        pointerEvents: isOpen ? "auto" : "none", // disable clicks while fading out
      }}
    >
      <div className="relative p-4">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
        <h2 className="text-lg font-semibold mb-3">Notifications</h2>
        <p className="text-gray-700 text-sm">You have no new notifications.</p>
      </div>
    </div>
  );
}
