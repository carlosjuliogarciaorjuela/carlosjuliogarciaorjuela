"use client";

import Link from "next/link";
import Logo from "@/components/ui/Logo";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

const SocialIcon = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
  >
    {children}
  </Link>
);

const Footer = () => {
  return (
    <footer className="bg-white text-black mt-20 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          {/* Sección Logo y Redes Sociales */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex justify-center md:justify-start">
              <Logo className="h-20 w-auto text-gray-900 sm:h-24 lg:h-28" />
            </div>
            <p className="text-gray-600 text-sm sm:text-base text-center md:text-left">
              Soluciones KYJ S.A.S - Transformación digital para tu negocio
            </p>
            <div className="flex justify-center md:justify-start space-x-4 sm:space-x-5 pt-2">
              <SocialIcon href="https://facebook.com">
                <FaFacebookF className="h-5 w-5 sm:h-6 sm:w-6" />
              </SocialIcon>
              <SocialIcon href="https://instagram.com">
                <FaInstagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </SocialIcon>
              <SocialIcon href="https://linkedin.com">
                <FaLinkedinIn className="h-5 w-5 sm:h-6 sm:w-6" />
              </SocialIcon>
              <SocialIcon href="https://twitter.com">
                <FaTwitter className="h-5 w-5 sm:h-6 sm:w-6" />
              </SocialIcon>
              <SocialIcon href="https://wa.me/573001234567">
                <FaWhatsapp className="h-5 w-5 sm:h-6 sm:w-6" />
              </SocialIcon>
            </div>
          </div>

          {/* Sección de Empresa */}
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">
              Empresa
            </h3>
            <nav className="space-y-1.5 sm:space-y-2">
              <Link
                href="/"
                className="block text-gray-600 hover:text-gray-900 text-sm sm:text-base"
              >
                Inicio
              </Link>
              <Link
                href="/#nuestra-empresa"
                className="block text-gray-600 hover:text-gray-900 text-sm sm:text-base"
              >
                Nuestra Empresa
              </Link>
              <Link
                href="/#soluciones"
                className="block text-gray-600 hover:text-gray-900 text-sm sm:text-base"
              >
                Soluciones
              </Link>
              <Link
                href="/#proyectos"
                className="block text-gray-600 hover:text-gray-900 text-sm sm:text-base"
              >
                Proyectos
              </Link>
            </nav>
          </div>

          {/* Sección de Contacto */}
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">
              Contacto
            </h3>
            <div className="space-y-1.5 sm:space-y-2">
              <p className="text-gray-600 text-sm sm:text-base">Carrera</p>
              <Link
                href="https://wa.me/573001234567"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 mt-2 text-sm sm:text-base"
                target="_blank"
              >
                <FaWhatsapp className="h-5 w-5 flex-shrink-0" />
                Chatea por WhatsApp
              </Link>
            </div>
          </div>

          {/* Sección Legal */}
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">
              Legal
            </h3>
            <nav className="space-y-1.5 sm:space-y-2">
              <Link
                href="/privacy"
                className="block text-gray-600 hover:text-gray-900 text-sm sm:text-base"
              >
                Política de Privacidad
              </Link>
              <Link
                href="/terms"
                className="block text-gray-600 hover:text-gray-900 text-sm sm:text-base"
              >
                Términos y Condiciones
              </Link>
              <Link
                href="/cookies"
                className="block text-gray-600 hover:text-gray-900 text-sm sm:text-base"
              >
                Política de Cookies
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-600">
          <p className="text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} ERP System. Todos los derechos
            reservados.
            <br className="hidden sm:block" />
            Desarrollado por{" "}
            <Link
              href="https://cedev.com"
              className="hover:text-gray-900 underline transition-colors duration-300 text-xs sm:text-sm"
              target="_blank"
              rel="noopener"
            >
              CeDev
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
