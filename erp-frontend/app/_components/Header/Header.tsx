"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "@/app/_components/ui/Logo";
import NavMenu from "@/components/Header/NavMenu";
import Button from "@/components/ui/Button";
import {
  ArrowRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24 lg:h-28">
          {/* Logo con tamaño responsive */}
          <Link href="/" className="flex-shrink-0">
            <Logo className="h-16 md:h-20 lg:h-24 w-auto text-blue-600 transition-all duration-300" />
          </Link>

          {/* Menú de Navegación para pantallas medianas y grandes */}
          <NavMenu className="hidden md:flex space-x-4 lg:space-x-6" />

          {/* Botón de Iniciar Sesión - Versión desktop */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              href="/login"
              variant="default"
              size="lg"
              className="text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-3"
            >
              <span>Iniciar Sesión</span>
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Button>
          </div>

          {/* Botón de menú hamburguesa - Versión móvil */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menú de navegación"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {/* Menú desplegable móvil */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed left-0 w-full bg-white/30 backdrop-blur-md  shadow-lg"
          style={{ top: "5rem" }}
        >
          {" "}
          {/* Ajustar según altura del header */}
          <NavMenu className="flex flex-col space-y-4 p-4" />
          <div className="p-4 border-t border-gray-100">
            <Button
              href="/login"
              variant="default"
              className="w-full py-3 text-base"
            >
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
