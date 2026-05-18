"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const t = useTranslations("Footer");

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="site-footer position-relative overflow-hidden">
      {/* Ambient background orbs */}
      <div className="footer-orb footer-orb--red position-absolute" />
      <div className="footer-orb footer-orb--purple position-absolute" />

      {/* ── LET'S CONNECT CTA ──────────────────────────── */}
      <div className="footer-cta-wrap position-relative" style={{ zIndex: 1 }}>
        <div className="container" style={{ paddingTop: "3.5rem" }}>
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="footer-section-dot" />
                <span className="footer-section-label">{t("get_in_touch")}</span>
              </div>
              <h2 className="footer-cta-headline">{t("cta_headline")}</h2>
            </div>
            <div className="col-lg-4 d-flex justify-content-lg-end mt-4 mt-lg-0">
              <Link href="/contact" className="footer-contact-btn d-inline-flex align-items-center gap-2">
                {t("contact_us")}
                <span className="footer-contact-btn-icon d-flex align-items-center justify-content-center">
                  <ArrowUpRight size={14} />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-cta-separator" />
      </div>

      {/* ── MAIN FOOTER COLUMNS ────────────────────────── */}
      <div className="footer-main position-relative" style={{ zIndex: 1 }}>
        <div className="container">
          <div className="row g-4 g-xl-5">

            {/* Col 1: Brand + tagline + social */}
            <div className="col-12 col-lg-4 col-md-6">
              <div className="d-flex align-items-center gap-2 mb-3">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26" aria-hidden="true">
                  <path d="M16 3L29 28H3L16 3Z" stroke="#5fd640" strokeWidth="2.5" strokeLinejoin="round" />
                  <line x1="9.5" y1="21" x2="22.5" y2="21" stroke="#5fd640" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <span className="footer-logo-text">Ara Creation</span>
              </div>
              <p className="footer-tagline">{t("tagline")}</p>
              <div className="d-flex gap-2 mt-4">
                <a className="footer-social-btn d-flex align-items-center justify-content-center" href="#" aria-label="Facebook" rel="noopener noreferrer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a className="footer-social-btn d-flex align-items-center justify-content-center" href="#" aria-label="Instagram" rel="noopener noreferrer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a className="footer-social-btn d-flex align-items-center justify-content-center" href="#" aria-label="LinkedIn" rel="noopener noreferrer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 2: Company */}
            <div className="col-6 col-lg-2 col-md-3">
              <h5 className="footer-col-heading">{t("company")}</h5>
              <div className="footer-col-divider" />
              <ul className="footer-links">
                <li><Link href="/about">{t("about_us")}</Link></li>
                <li><Link href="/ad-shoot">{t("services")}</Link></li>
                <li><Link href="/contact">{t("contact_link")}</Link></li>
                <li><Link href="/contact">{t("careers")}</Link></li>
              </ul>
            </div>

            {/* Col 3: Useful Links */}
            <div className="col-6 col-lg-2 col-md-3">
              <h5 className="footer-col-heading">{t("useful_links")}</h5>
              <div className="footer-col-divider" />
              <ul className="footer-links">
                <li><Link href="/ad-shoot">{t("link_ad")}</Link></li>
                <li><Link href="/ad-shoot">{t("link_video")}</Link></li>
                <li><Link href="/ad-shoot">{t("link_photo")}</Link></li>
                <li><Link href="/contact">{t("link_contact")}</Link></li>
              </ul>
            </div>

            {/* Col 4: Contact */}
            <div className="col-12 col-lg-4 col-md-6">
              <h5 className="footer-col-heading">{t("contact_heading")}</h5>
              <div className="footer-col-divider" />
              <p className="footer-contact-type">{t("call_us")}</p>
              <p className="footer-contact-value mb-4">{t("phone")}</p>
              <p className="footer-contact-type">{t("location")}</p>
              <p className="footer-contact-value">{t("address")}</p>
            </div>

          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ─────────────────────────────────── */}
      <div className="footer-bottom position-relative" style={{ zIndex: 1 }}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
            <p className="footer-copyright">{t("copyright")}</p>
            <div className="d-flex align-items-center gap-4">
              <Link href="/contact" className="footer-terms">{t("terms")}</Link>
              <button
                type="button"
                onClick={scrollToTop}
                className="footer-scroll-top d-flex align-items-center justify-content-center"
                aria-label="Scroll to top"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="19" x2="12" y2="5" />
                  <polyline points="5 12 12 5 19 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
