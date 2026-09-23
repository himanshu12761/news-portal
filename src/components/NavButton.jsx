"use client";

export default function NavButton({ label, onClick, variant = "primary" }) {
  const baseStyle =
    "px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm";
  const styles = {
    primary: `${baseStyle} bg-blue-600 text-white hover:bg-blue-700`,
    secondary: `${baseStyle} bg-gray-200 text-gray-800 hover:bg-gray-300`,
    outline: `${baseStyle} border border-gray-400 text-gray-800 hover:bg-gray-100`,
  };

  return (
    <button onClick={onClick} className={styles[variant] || styles.primary}>
      {label}
    </button>
  );
}
