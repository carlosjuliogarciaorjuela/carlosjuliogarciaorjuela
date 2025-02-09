"use client";

// components/ui/Logo.tsx
import Image from "next/image";
import logo from "@/public/images/LogoBlack.svg";

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return <Image src={logo} alt="ERP Logo" className={className} priority />;
};

export default Logo;
