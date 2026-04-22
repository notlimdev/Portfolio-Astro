import { useState } from "react";
import { Bars4Icon } from "@heroicons/react/24/outline";
import Navigation from "./Navigation";
import CTAButton from "./CTAButton";

export default function HeaderNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div
      className="relative z-10 h-20 w-[95%] 2xl:w-[90%]
                    grid grid-cols-[20%_80%]
                    sm:grid-cols-[25%_60%_15%] sm:top-20
                    md:grid-cols-[12%_72%_16%] md:top-22.5
                    lg:grid-cols-[12%_76%_12%] lg:top-25 lg:justify-center lg:items-center
                    xl:top-26.25
                    max-sm:top-0 max-sm:w-full
                    items-center"
    >
      {/* Logo */}
      <a
        href="/"
        className="flex justify-center items-center
                   max-sm:relative max-sm:top-5 max-sm:left-2"
      >
        <img
          className="h-14 w-14 max-sm:w-9 max-sm:h-9 xl:h-20 xl:min-w-20"
          src="/logo/logo_portfolio.svg"
          alt="logo"
          width={80}
          height={80}
        />
      </a>

      {/* Navegación */}
      <Navigation isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Botón hamburguesa — solo mobile */}
      <button
        className="w-8 h-8 absolute right-4 top-10 text-white cursor-pointer sm:hidden"
        onClick={() => setMenuOpen(true)}
        aria-label="Abrir menú"
      >
        <Bars4Icon />
      </button>

      {/* Botón Mi Blog — oculto en mobile */}
      <CTAButton
        label="Mi Blog"
        href="/blog"
        variant="gradient-border"
        className="max-sm:hidden"
      />
    </div>
  );
}
