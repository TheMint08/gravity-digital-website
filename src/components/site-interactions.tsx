"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, BookOpen, Laptop, LifeBuoy, Menu, Workflow, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { site } from "@/lib/site-config";

type ContactLinkVariant = "compact" | "navigation" | "prominent";

export function ContactLinks({ variant }: { variant: ContactLinkVariant }) {
  const links = [
    { name: "WhatsApp", value: site.contact.whatsapp.label, href: site.contact.whatsapp.href, brand: "whatsapp", external: true },
    { name: "Instagram", value: site.contact.instagram.label, href: site.contact.instagram.href, brand: "instagram", external: true },
    { name: "Correo", value: site.contact.email.label, href: site.contact.email.href, brand: "gmail", external: false },
  ] as const;

  return (
    <div aria-label="Contacto directo" className={`contact-links contact-links-${variant}`} role="group">
      {links.map((link) => (
        <a
          aria-label={`${link.name}: ${link.value}`}
          className={`contact-link contact-link-${link.brand}`}
          href={link.href}
          key={link.brand}
          rel={link.external ? "noreferrer" : undefined}
          target={link.external ? "_blank" : undefined}
          title={variant === "compact" ? `${link.name}: ${link.value}` : undefined}
        >
          <Image alt="" height={21} src={`/brands/${link.brand}.svg`} width={21} />
          {variant !== "compact" && (
            <span>
              <strong>{link.name}</strong>
              {variant === "prominent" && <small>{link.value}</small>}
            </span>
          )}
          {variant === "prominent" && <ArrowUpRight aria-hidden="true" size={15} />}
        </a>
      ))}
    </div>
  );
}

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const menuTransition = { duration: prefersReducedMotion ? 0 : 0.18 };

  return (
    <header className="site-header">
      <a aria-label="Gravity Digital, inicio" className="brand" href="#inicio">
        <Image alt="" className="brand-mark" height={72} src="/gravity-mark.png" width={72} />
        <span className="brand-name">{site.name}</span>
      </a>

      <nav aria-label="Navegación principal" className="desktop-nav">
        {site.navigation.map((item) => (
          <a className="nav-link" href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
        <ContactLinks variant="compact" />
        <a className="button button-dark nav-action" href="#contacto">
          Contáctanos
          <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <button
        aria-controls="mobile-navigation"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        type="button"
      >
        {menuOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            animate={{ opacity: 1, y: 0 }}
            aria-label="Navegación móvil"
            className="mobile-nav"
            exit={{ opacity: 0, y: -8 }}
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            transition={menuTransition}
          >
            {site.navigation.map((item) => (
              <a
                className="mobile-nav-link"
                href={item.href}
                key={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <ContactLinks variant="navigation" />
            <a className="button button-dark mobile-nav-action" href="#contacto" onClick={() => setMenuOpen(false)}>
              Contáctanos
              <span aria-hidden="true">↗</span>
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export function CircuitArtwork() {
  const prefersReducedMotion = useReducedMotion();
  const duration = prefersReducedMotion ? 0 : 1.15;

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="circuit-artwork"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
      transition={{ duration, ease: [0.2, 0.7, 0.2, 1], delay: 0.12 }}
    >
      <div
        aria-label="Tu necesidad y contexto reciben acompañamiento técnico, que puede tomar la forma de capacitación, asesoramiento, automatización o soporte."
        className="support-map"
        role="img"
      >
      <div className="support-map-origin">
        <span>Tu punto de partida</span>
        <strong>Tu necesidad,<br />tu contexto</strong>
      </div>
      <ArrowDown aria-hidden="true" className="support-map-arrow" size={18} />
      <div className="support-map-center">
        <Image alt="" className="artwork-mark" height={48} src="/gravity-mark.png" width={60} />
        <span><strong>Apoyo técnico</strong><small>que te explica</small></span>
      </div>
      <div className="support-map-caption">Una solución toma la forma que necesitas</div>
      <div className="support-map-services">
        <span><BookOpen aria-hidden="true" size={16} /> Aprender</span>
        <span><Laptop aria-hidden="true" size={16} /> Elegir</span>
        <span><Workflow aria-hidden="true" size={16} /> Conectar</span>
        <span><LifeBuoy aria-hidden="true" size={16} /> Resolver</span>
      </div>
      </div>
    </motion.div>
  );
}
