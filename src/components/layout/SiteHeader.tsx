"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import styles from "./SiteHeader.module.css";

const NAV = [
  { href: "/perfumes", label: "Perfumes" },
  { href: "/#coleccion", label: "Colección 01" },
  { href: "/#manifiesto", label: "Manifiesto" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  // En la home el header flota transparente sobre el hero hasta que se scrollea.
  const overHero = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const solid = !overHero || scrolled || menuOpen;

  return (
    <>
      {/* Sobre el hero el logotipo gigante ya hace de marca: el chico se oculta hasta scrollear. */}
      <header className={styles.header} data-solid={solid || undefined} data-over-hero={!solid || undefined}>
        <div className={styles.inner}>
          <Link href="/" className={styles.brand} onClick={() => setMenuOpen(false)}>
            <Logo className={styles.logo} />
          </Link>

          <nav aria-label="Principal" className={styles.nav}>
            <ul>
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={menuOpen}
            aria-controls="menu-movil"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="visually-hidden">{menuOpen ? "Cerrar menú" : "Abrir menú"}</span>
            <span className={styles.burger} data-open={menuOpen || undefined} aria-hidden />
          </button>
        </div>
      </header>

      {/* Fuera del <header>: su backdrop-filter haría de contenedor del position: fixed. */}
      <div id="menu-movil" className={styles.drawer} data-open={menuOpen || undefined} hidden={!menuOpen}>
        <nav aria-label="Menú móvil">
          <ul>
            {NAV.map((item, index) => (
              <li key={item.href} style={{ "--i": index } as React.CSSProperties}>
                <Link href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className={styles.drawerFoot}>Lo que queda cuando te vas.</p>
      </div>
    </>
  );
}
