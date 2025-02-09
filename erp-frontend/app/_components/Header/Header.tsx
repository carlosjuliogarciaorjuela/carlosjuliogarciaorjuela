"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/app/_components/ui/Logo";
import NavMenu from "@/components/Header/NavMenu";
import Button from "@/components/ui/Button";
import { ArrowRightIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
	  <header className="bg-white shadow-sm sticky top-0 z-50">
		<div className="max-w-7xl mx-auto px-1 sm:px-1 lg:px-8">
		  <div className="flex justify-between items-center h-32">
			{/* Logo */}
			<Link href="/" className="flex-shrink-0">
			  <Logo className="h-28 w-auto text-blue-600" />
			</Link>

			{/* Menú de Navegación para pantallas medianas y grandes */}
			<NavMenu className="hidden sm:flex space-x-4" />

			{/* Botón de Iniciar Sesión en pantallas medianas y grandes */}
			<div className="hidden sm:flex items-center gap-2">
			  <Button href="/login" variant="default" size="lg">
				<span>Iniciar Sesión</span>
				<ArrowRightIcon className="h-4 w-4 ml-2" />
			  </Button>
			</div>

			{/* Botón de menú hamburguesa en móviles (sm y menores) */}
			<button
				className="flex sm:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
				onClick={() => setIsMenuOpen(!isMenuOpen)}
			>
			  {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
			</button>
		  </div>
		</div>

		{/* Menú desplegable en móviles (sm y menores) */}
		{isMenuOpen && (
			<div className="sm:hidden absolute left-0 top-full w-full bg-white shadow-sm">
			  <NavMenu className="flex flex-col space-y-2 p-4" />
			  <div className="p-4">
				<Button href="/login" variant="default" size="lg" className="w-full">
				  <span>Iniciar Sesión</span>
				  <ArrowRightIcon className="h-4 w-4 ml-2" />
				</Button>
			  </div>
			</div>
		)}
	  </header>
  );
};

export default Header;

