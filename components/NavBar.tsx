"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function MagicalNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Abordagens", href: "#servicos" },
    { name: "Sobre Mim", href: "#sobre" },
    { name: "Artigos", href: "#artigos" },
    { name: "Entendendo", href: "#segunda-sessao" },
    { name: "FAQ", href: "#faq" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <>
      <header
        className={`
          fixed top-3 left-1/2 -translate-x-1/2 z-50
          transition-all duration-500 ease-out
          ${
            scrolled
              ? "w-[92%] max-w-5xl py-2 bg-black/60 shadow-2xl border border-white/10 backdrop-blur-xl md:py-1.5"
              : "w-[95%] max-w-6xl py-2.5 bg-white/5 border border-white/10 backdrop-blur-md md:py-2"
          }
          rounded-full
        `}
      >
        <div className="flex items-center justify-between px-5 md:px-4 md:gap-2">
          {/* LOGO */}
          <a
            href="#"
            className="text-[foreground] text-lg md:text-xl font-semibold tracking-wide"
          >
            <Image
              src="/Ativo_20.svg"
              alt="Logo"
              width={130}
              height={130}
              className="mr-2 inline-block h-[82px] w-[72px] md:h-[95px] md:w-[95px] lg:h-[100px] lg:w-[150px] ml-8"
            />
          </a>

          {/* DESKTOP LINKS */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs tracking-wide transition-colors duration-300 lg:text-sm ${
                  scrolled
                    ? "text-[#e5f3f1]/90 hover:text-white"
                    : "text-[foreground]/70 hover:text-[foreground]"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex">
            <a
              href="#contato"
              className="
                px-3 py-2.5
                min-w-[150px]
                rounded-full
                bg-white
                text-[-primary]
                text-sm
                font-semibold
                hover:scale-105
                transition-all duration-300
                inline-flex
                items-center
                justify-center
                lg:min-w-[180px]
                lg:px-4
                lg:py-3
                lg:text-base
              "
            >
              <p>Vamos Conversar</p>
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="
              md:hidden
              text-[foreground]
              p-2
            "
          >
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed inset-0 z-40
          transition-all duration-500
          md:hidden
          ${
            mobileMenu
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        {/* BACKDROP */}
        <div
          className="
            absolute inset-0
            bg-black/70
            backdrop-blur-xl
          "
        />

        {/* MENU CONTENT */}
        <div
          className="
            relative
            flex flex-col
            items-center
            justify-center
            h-full
            gap-8
            mt-5
          "
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenu(false)}
              className="
                text-white
                text-3xl
                font-light
                tracking-wide
                hover:opacity-70
                transition-opacity
                
              "
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contato"
            onClick={() => setMobileMenu(false)}
            className="
              mt-6
              px-6 py-3
              rounded-full
              bg-white
              text-black
              font-medium
            "
          >
            <p>Vamos Conversar</p>
          </a>
        </div>
      </div>
    </>
  );
}
