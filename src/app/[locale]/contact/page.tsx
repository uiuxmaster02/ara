"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowUpRight, User, Mail, MessageSquare, Phone } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useState } from "react";

export default function ContactPage() {
  const t = useTranslations("Contact");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };


  return (
    <div className="contact-page-root">

      {/* ── PAGE HEADER ─────────────────────────────── */}
      <section className="contact-page-header">
        <div className="container">
          <div className="row align-items-start py-5">
            <div className="col-lg-7 col-md-8">
              <motion.h1
                className="contact-page-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                {t("breadcrumb_current")}
              </motion.h1>
            </div>
            <motion.div
              className="col-lg-5 col-md-4 d-flex align-items-end justify-content-end"
              style={{ minHeight: "80px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <nav className="contact-breadcrumb">
                <Link href="/" className="contact-breadcrumb-link">{t("breadcrumb_home")}</Link>
                <span className="contact-breadcrumb-sep">/</span>
                <span className="contact-breadcrumb-current">{t("breadcrumb_current")}</span>
              </nav>
            </motion.div>
          </div>
        </div>
        <div className="contact-header-separator" />
      </section>

      {/* ── MAIN CONTACT SECTION ────────────────────── */}
      <section className="contact-main-section">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* Left: info */}
            <motion.div
              className="col-12 col-lg-5"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="contact-section-dot" />
                <span className="contact-section-label">{t("section_label")}</span>
              </div>

              <h2 className="contact-headline">{t("headline")}</h2>
              <p className="contact-desc">{t("desc")}</p>

              <div className="d-flex flex-column gap-3 mt-4">
                <div className="d-flex align-items-center gap-3">
                  <span className="contact-info-icon d-flex align-items-center justify-content-center">
                    <Mail size={14} />
                  </span>
                  <span className="contact-info-text">{t("email")}</span>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <span className="contact-info-icon d-flex align-items-center justify-content-center">
                    <Phone size={14} />
                  </span>
                  <span className="contact-info-text">{t("phone")}</span>
                </div>
              </div>

              <div className="d-flex align-items-center gap-2 mt-4 flex-wrap">
                <span className="contact-follow-label">{t("follow_us")}</span>
                <a className="contact-social-btn d-flex align-items-center justify-content-center" href="#" aria-label="Facebook" rel="noopener noreferrer">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a className="contact-social-btn d-flex align-items-center justify-content-center" href="#" aria-label="Twitter" rel="noopener noreferrer">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a className="contact-social-btn d-flex align-items-center justify-content-center" href="#" aria-label="LinkedIn" rel="noopener noreferrer">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Right: form card */}
            <motion.div
              className="col-12 col-lg-7"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            >
              <div className="contact-form-card">
                <form onSubmit={(e) => e.preventDefault()}>

                  {/* Name */}
                  <div className="contact-field-group">
                    <label className="contact-field-label">{t("field_name_label")}</label>
                    <div className="contact-field-wrap">
                      <input
                        type="text"
                        name="name"
                        className="contact-field-input"
                        placeholder={t("field_name_placeholder")}
                        value={form.name}
                        onChange={handleChange}
                        autoComplete="name"
                      />
                      <span className="contact-field-icon">
                        <User size={16} />
                      </span>
                    </div>
                    <div className="contact-field-divider" />
                  </div>

                  {/* Email */}
                  <div className="contact-field-group">
                    <label className="contact-field-label">{t("field_email_label")}</label>
                    <div className="contact-field-wrap">
                      <input
                        type="email"
                        name="email"
                        className="contact-field-input"
                        placeholder={t("field_email_placeholder")}
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="email"
                      />
                      <span className="contact-field-icon">
                        <Mail size={16} />
                      </span>
                    </div>
                    <div className="contact-field-divider" />
                  </div>

                  {/* Message */}
                  <div className="contact-field-group">
                    <label className="contact-field-label">{t("field_message_label")}</label>
                    <div className="contact-field-wrap">
                      <textarea
                        name="message"
                        className="contact-field-input contact-field-textarea"
                        placeholder={t("field_message_placeholder")}
                        value={form.message}
                        onChange={handleChange}
                        rows={3}
                      />
                      <span className="contact-field-icon contact-field-icon--top">
                        <MessageSquare size={16} />
                      </span>
                    </div>
                    <div className="contact-field-divider" />
                  </div>

                  {/* Submit */}
                  <div className="d-flex align-items-center gap-2 mt-4">
                    <button type="submit" className="contact-submit-btn">
                      {t("submit_btn")}
                    </button>
                    <button type="button" className="contact-submit-arrow d-flex align-items-center justify-content-center" aria-label="Send" onClick={(e) => (e.currentTarget.closest("form") as HTMLFormElement)?.requestSubmit()}>
                      <ArrowUpRight size={16} />
                    </button>
                  </div>

                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
