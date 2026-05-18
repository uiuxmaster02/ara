"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useTheme } from "@/components/ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, Sun, Moon, ChevronDown, Globe,
  Megaphone, Film, Camera, Monitor, Smartphone, TrendingUp,
  ArrowUpRight, Zap,
} from "lucide-react";
import { useLocale } from "next-intl";

const services = [
  {
    key: "ad_shoot",
    path: "/ad-shoot",
    Icon: Megaphone,
    color: "#fbbf24",
    bg: "rgba(251,191,36,0.14)",
    desc: "Impactful ads that drive real results",
  },
  {
    key: "product_video",
    path: "/product-video",
    Icon: Film,
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.14)",
    desc: "Cinematic product video production",
  },
  {
    key: "event_photo",
    path: "/event-photo",
    Icon: Camera,
    color: "#f472b6",
    bg: "rgba(244,114,182,0.14)",
    desc: "Precision event photography",
  },
  {
    key: "web_dev",
    path: "/web-development",
    Icon: Monitor,
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.14)",
    desc: "High-performance modern websites",
  },
  {
    key: "app_dev",
    path: "/app-development",
    Icon: Smartphone,
    color: "#34d399",
    bg: "rgba(52,211,153,0.14)",
    desc: "Intuitive mobile app development",
  },
  {
    key: "social_media",
    path: "/social-media",
    Icon: TrendingUp,
    color: "#fb7185",
    bg: "rgba(251,113,133,0.14)",
    desc: "Strategic social media growth",
  },
];

export default function Navigation() {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isHome = pathname === "/";
  const isLightNav = mounted && !isHome && !scrolled && theme !== "dark";

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openServices = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const closeServices = () => {
    timeoutRef.current = setTimeout(() => setIsServicesOpen(false), 200);
  };

  const toggleLanguage = () => {
    router.replace(pathname, { locale: locale === "en" ? "de" : "en" });
  };

  return (
    <>
      <nav
        className={`fixed-top w-100${isLightNav ? " nav-light" : ""}`}
        style={{
          backgroundColor: scrolled
            ? "rgba(5,12,24,0.94)"
            : isLightNav
            ? "rgba(255,255,255,0.96)"
            : "transparent",
          backdropFilter: scrolled || isLightNav ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled || isLightNav ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.07)"
            : isLightNav
            ? "1px solid rgba(0,0,0,0.08)"
            : "1px solid transparent",
          zIndex: 1000,
          transition: "all 0.3s ease",
        }}
      >
        <div
          className={`container d-flex justify-content-between align-items-center ${scrolled ? "py-2" : "py-3"}`}
          style={{ transition: "padding 0.3s ease" }}
        >
          {/* ── Logo ── */}
          <Link href="/" className="d-flex align-items-center gap-2 text-decoration-none" style={{ flexShrink: 0 }}>
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
              <path d="M16 3L29 28H3L16 3Z" stroke="#5fd640" strokeWidth="2.5" strokeLinejoin="round" />
              <line x1="9.5" y1="21" x2="22.5" y2="21" stroke="#5fd640" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <span className="nav-logo-text">Ara Creation</span>
          </Link>

          {/* ── Desktop Links ── */}
          <div className="d-none d-lg-flex align-items-center gap-1">
            <Link href="/" className="nav-link-item">{t("home")}</Link>

            {/* Services trigger + mega menu */}
            <div
              className="position-relative"
              onMouseEnter={openServices}
              onMouseLeave={closeServices}
            >
              <button className="nav-link-item nav-services-btn d-flex align-items-center gap-1">
                {t("services")}
                <motion.span
                  animate={{ rotate: isServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.22 }}
                  style={{ display: "flex", lineHeight: 1 }}
                >
                  <ChevronDown size={14} />
                </motion.span>
              </button>

              {/* ── MEGA MENU ── */}
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    className="mega-menu"
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                  >
                    {/* Left info panel */}
                    <div className="mega-left">
                      <div className="mega-badge">
                        <Zap size={11} strokeWidth={2.5} />
                        Our Services
                      </div>
                      <h3 className="mega-headline">
                        Everything your brand needs to grow
                      </h3>
                      <p className="mega-sub">
                        Creative ads, video, photography, web &amp; app development — all under one roof.
                      </p>
                      <div className="mega-divider" />
                      <Link
                        href="/ad-shoot"
                        className="mega-explore-btn"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Explore all services
                        <ArrowUpRight size={13} />
                      </Link>
                    </div>

                    {/* Right 2-column grid */}
                    <div className="mega-grid">
                      {services.map((s) => (
                        <Link
                          key={s.key}
                          href={s.path as any}
                          className="mega-item"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <div
                            className="mega-item-icon"
                            style={{ background: s.bg, color: s.color }}
                          >
                            <s.Icon size={17} strokeWidth={1.8} />
                          </div>
                          <div>
                            <p className="mega-item-title">{t(s.key as any)}</p>
                            <p className="mega-item-desc">{s.desc}</p>
                          </div>
                          <span className="mega-item-arrow">
                            <ArrowUpRight size={13} />
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/about" className="nav-link-item">{t("about")}</Link>
            <Link href="/contact" className="nav-link-item">{t("contact")}</Link>
          </div>

          {/* ── Desktop Actions ── */}
          <div className="d-none d-lg-flex align-items-center gap-2">
            <button onClick={toggleLanguage} className="nav-icon-btn d-flex align-items-center gap-1">
              <Globe size={15} />
              <span style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>{locale}</span>
            </button>
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="nav-icon-btn"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            )}
            <Link href="/contact" className="nav-cta d-inline-flex align-items-center gap-1">
              Get Started
              <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* ── Mobile Controls ── */}
          <div className="d-lg-none d-flex align-items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="nav-icon-btn"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <button
              className="nav-icon-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ── MOBILE MENU ── */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="mobile-panel"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
            >
              <div className="container py-3 d-flex flex-column gap-1">

                <Link href="/" className="mob-link" onClick={() => setIsMobileMenuOpen(false)}>
                  {t("home")}
                </Link>

                {/* Services accordion */}
                <div>
                  <button
                    className="mob-link mob-trigger d-flex justify-content-between align-items-center w-100"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  >
                    {t("services")}
                    <motion.span
                      animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ display: "flex" }}
                    >
                      <ChevronDown size={16} />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.18 }}
                        className="overflow-hidden"
                      >
                        <div className="mob-services-list">
                          {services.map((s) => (
                            <Link
                              key={s.key}
                              href={s.path as any}
                              className="mob-service-item"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <span
                                className="mob-service-icon"
                                style={{ background: s.bg, color: s.color }}
                              >
                                <s.Icon size={14} strokeWidth={1.8} />
                              </span>
                              {t(s.key as any)}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/about" className="mob-link" onClick={() => setIsMobileMenuOpen(false)}>
                  {t("about")}
                </Link>
                <Link href="/contact" className="mob-link" onClick={() => setIsMobileMenuOpen(false)}>
                  {t("contact")}
                </Link>

                <div className="mob-bottom">
                  <button
                    onClick={() => { toggleLanguage(); setIsMobileMenuOpen(false); }}
                    className="mob-lang-btn d-flex align-items-center justify-content-center gap-2 w-100"
                  >
                    <Globe size={15} />
                    Switch to {locale === "en" ? "Deutsch" : "English"}
                  </button>
                  <Link
                    href="/contact"
                    className="mob-cta d-flex align-items-center justify-content-center gap-1 w-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                    <ArrowUpRight size={14} />
                  </Link>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <style jsx global>{`
        /* Logo */
        .nav-logo-text {
          font-family: var(--font-unbounded), sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.02em;
          transition: color 0.3s ease;
        }
        .nav-light .nav-logo-text { color: #0d0d0d; }

        /* Desktop nav link */
        .nav-link-item {
          color: rgba(255,255,255,0.65);
          font-size: 0.85rem;
          font-weight: 500;
          padding: 0.42rem 0.85rem;
          border-radius: 8px;
          text-decoration: none;
          transition: color 0.18s, background 0.18s;
          white-space: nowrap;
        }
        .nav-link-item:hover {
          color: #fff;
          background: rgba(255,255,255,0.07);
        }
        .nav-light .nav-link-item { color: rgba(0,0,0,0.65); }
        .nav-light .nav-link-item:hover { color: #0d0d0d; background: rgba(0,0,0,0.06); }

        /* Services button */
        .nav-services-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          font-family: inherit;
          gap: 0.25rem;
        }

        /* Icon buttons (globe, theme) */
        .nav-icon-btn {
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.55);
          cursor: pointer;
          padding: 0.38rem 0.55rem;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-family: inherit;
          transition: color 0.18s, background 0.18s;
        }
        .nav-icon-btn:hover {
          color: #fff;
          background: rgba(255,255,255,0.07);
        }
        .nav-light .nav-icon-btn { color: rgba(0,0,0,0.5); }
        .nav-light .nav-icon-btn:hover { color: #0d0d0d; background: rgba(0,0,0,0.06); }

        /* Get Started CTA */
        .nav-cta {
          padding: 0.42rem 1rem;
          background: #5fd640;
          color: #060d14 !important;
          font-size: 0.8rem;
          font-weight: 700;
          border-radius: 8px;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          white-space: nowrap;
        }
        .nav-cta:hover {
          background: #76ea55;
          transform: translateY(-1px);
          color: #060d14 !important;
        }

        /* ════════════════════════
           MEGA MENU
        ════════════════════════ */
        .mega-menu {
          position: absolute;
          top: calc(100% + 16px);
          left: 50%;
          transform: translateX(-50%);
          width: 720px;
          background: #09111f;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          display: flex;
          overflow: hidden;
          box-shadow:
            0 40px 100px rgba(0,0,0,0.75),
            0 0 0 1px rgba(255,255,255,0.03),
            inset 0 1px 0 rgba(255,255,255,0.07);
          z-index: 1001;
        }

        /* Left panel */
        .mega-left {
          width: 215px;
          flex-shrink: 0;
          padding: 1.75rem 1.5rem;
          background: linear-gradient(155deg, #10203a 0%, #09111f 100%);
          border-right: 1px solid rgba(255,255,255,0.06);
          display: flex;
          flex-direction: column;
        }
        .mega-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #5fd640;
          margin-bottom: 1rem;
        }
        .mega-headline {
          font-family: var(--font-unbounded), sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.5;
          margin: 0 0 0.6rem;
        }
        .mega-sub {
          font-size: 0.73rem;
          color: rgba(255,255,255,0.38);
          line-height: 1.65;
          margin: 0;
          flex: 1;
        }
        .mega-divider {
          height: 1px;
          background: rgba(255,255,255,0.07);
          margin: 1.25rem 0;
        }
        .mega-explore-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.73rem;
          font-weight: 600;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          padding: 0.5rem 0.9rem;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
          white-space: nowrap;
        }
        .mega-explore-btn:hover {
          background: rgba(95,214,64,0.12);
          border-color: rgba(95,214,64,0.35);
          color: #5fd640;
        }

        /* Right grid */
        .mega-grid {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 0.65rem;
          gap: 2px;
          align-content: start;
        }
        .mega-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.8rem 0.85rem;
          border-radius: 12px;
          text-decoration: none;
          transition: background 0.15s;
          position: relative;
        }
        .mega-item:hover {
          background: rgba(255,255,255,0.05);
        }
        .mega-item-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .mega-item-title {
          font-size: 0.79rem;
          font-weight: 600;
          color: rgba(255,255,255,0.8);
          line-height: 1.3;
          margin: 0 0 0.2rem;
          transition: color 0.15s;
        }
        .mega-item:hover .mega-item-title { color: #fff; }
        .mega-item-desc {
          font-size: 0.68rem;
          color: rgba(255,255,255,0.3);
          line-height: 1.45;
          margin: 0;
        }
        .mega-item-arrow {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          color: rgba(255,255,255,0);
          transition: color 0.15s;
          line-height: 1;
        }
        .mega-item:hover .mega-item-arrow { color: rgba(255,255,255,0.35); }

        /* ════════════════════════
           MOBILE MENU
        ════════════════════════ */
        .mobile-panel {
          background: #08101d;
          border-top: 1px solid rgba(255,255,255,0.06);
          overflow: hidden;
        }
        .mob-link {
          display: block;
          width: 100%;
          color: rgba(255,255,255,0.7);
          font-size: 0.9rem;
          font-weight: 500;
          padding: 0.65rem 0.85rem;
          border-radius: 10px;
          text-decoration: none;
          background: transparent;
          border: none;
          cursor: pointer;
          font-family: inherit;
          text-align: left;
          transition: background 0.15s, color 0.15s;
        }
        .mob-link:hover { background: rgba(255,255,255,0.06); color: #fff; }
        .mob-trigger { gap: 0; }

        .mob-services-list {
          display: flex;
          flex-direction: column;
          gap: 1px;
          padding: 0.35rem 0 0.35rem 0.5rem;
        }
        .mob-service-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.83rem;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          padding: 0.5rem 0.85rem;
          border-radius: 8px;
          transition: background 0.15s, color 0.15s;
        }
        .mob-service-item:hover { background: rgba(255,255,255,0.05); color: #fff; }
        .mob-service-icon {
          width: 28px;
          height: 28px;
          border-radius: 7px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .mob-bottom {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 0.75rem;
          padding-top: 0.75rem;
          border-top: 1px solid rgba(255,255,255,0.07);
        }
        .mob-lang-btn {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.09);
          color: rgba(255,255,255,0.6);
          border-radius: 10px;
          padding: 0.6rem;
          font-size: 0.83rem;
          cursor: pointer;
          font-family: inherit;
          transition: background 0.15s, color 0.15s;
        }
        .mob-lang-btn:hover { background: rgba(255,255,255,0.09); color: #fff; }
        .mob-cta {
          background: #5fd640;
          color: #060d14 !important;
          border-radius: 10px;
          padding: 0.65rem;
          font-size: 0.85rem;
          font-weight: 700;
          text-decoration: none;
          transition: background 0.2s;
        }
        .mob-cta:hover { background: #76ea55; color: #060d14 !important; }
      `}</style>
    </>
  );
}
