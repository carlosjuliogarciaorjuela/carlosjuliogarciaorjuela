import Link from "next/link";

type NavMenuProps = {
  className?: string;
};

const NavMenu = ({ className }: NavMenuProps) => {
  const links = [
    { name: "Inicio", href: "/" },
    { name: "Nuestra empresa", href: "/sobre-nosotros" },
    { name: "Soluciones", href: "/pricing" },
    { name: "Proyectos", href: "/pricing" },
    { name: "Contacto", href: "/contact" },
  ];

  return (
    <nav className={className}>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavMenu;
