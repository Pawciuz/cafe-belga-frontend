import Link from "next/link";
import { type ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const variants = {
  primary:
    "bg-[#A990B8] text-white py-3 px-5 rounded-full font-instrumentSerif text-2xl shadow-xl hover:bg-[#7F5D8B] hover:shadow-none transition duration-300 ease-in-out",
  secondary: "bg-gray-500 text-white",
};

const Button = ({
  children,
  className = "",
  href,
  onClick,
  variant,
}: ButtonProps) => {
  const variantClass = variant ? variants[variant] : "";

  if (href) {
    return (
      <Link
        href={href}
        className={`${variantClass} ${className}`}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }
  return (
    <button className={`${variantClass} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
