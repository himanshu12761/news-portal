import Link from "next/link";

export default function MenuItem({ href, label, isActive, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        px-3 py-2 rounded-md font-medium transition 
        ${isActive ? "bg-blue-600 text-white" : "text-black hover:bg-gray-500 hover:text-white"}
      `}
    >
      {label}
    </Link>
  );
}
