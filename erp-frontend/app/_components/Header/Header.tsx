// components/Header/Header.tsx
import Link from "next/link";
import Logo from "@/app/_components/ui/Logo";
import NavMenu from "@/components/Header/NavMenu";
import Button from "@/components/ui/Button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo className="h-8 w-auto text-blue-600" />
          </Link>

          {/* Menú de Navegación */}
          <NavMenu className="hidden md:flex space-x-2" />

          {/* Botones de Acción */}
          <div className="flex items-center gap-2">
            <Button href="/login" variant="default" size="lg">
              <span>Iniciar Sesión</span>
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
