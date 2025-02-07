// components/Footer/Footer.tsx
import Link from "next/link";
import Logo from "@/components/ui/Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sección Logo y Descripción */}
          <div className="space-y-4">
            <Logo className="h-8 w-auto text-white" />
            <p className="text-gray-400">
              Soluciones KYJ S.A.S
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>
            <Link
              href="/features"
              className="block text-gray-400 hover:text-white"
            >
              Características
            </Link>
            <Link
              href="/pricing"
              className="block text-gray-400 hover:text-white"
            >
              Precios
            </Link>
            <Link
              href="/contact"
              className="block text-gray-400 hover:text-white"
            >
              Contacto
            </Link>
          </div>

          {/* Legal */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Legal</h3>
            <Link
              href="/privacy"
              className="block text-gray-400 hover:text-white"
            >
              Privacidad
            </Link>
            <Link
              href="/terms"
              className="block text-gray-400 hover:text-white"
            >
              Términos
            </Link>
          </div>

          {/* Contacto */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <p className="text-gray-400">support@erp.com</p>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} ERP System. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
