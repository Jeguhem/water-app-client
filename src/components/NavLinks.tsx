"use client";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Inventory", href: "/inventory" },
  { label: "Services", href: "#" },
  { label: "About us", href: "/about-us" },
];

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col md:flex-row md:space-x-6 gap-2 lg:gap-1 text-center">
      {navLinks.map((link, idx) => (
        <a
          key={idx}
          href={link.href}
          className={`font-medium text-primary-blue hover:text-gray-700 ${
            pathname === link.href ? "border-b-2 border-primary-red" : ""
          }`}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;
