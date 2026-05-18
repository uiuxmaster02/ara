"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/routing";

export default function AboutPage() {
  const t = useTranslations("About");

  const stats = [
    { value: t("stat1_value"), label: t("stat1_label") },
    { value: t("stat2_value"), label: t("stat2_label") },
    { value: t("stat3_value"), label: t("stat3_label") },
    { value: t("stat4_value"), label: t("stat4_label") },
  ];

  const values = [
    { title: t("value1_title"), desc: t("value1_desc") },
    { title: t("value2_title"), desc: t("value2_desc") },
    { title: t("value3_title"), desc: t("value3_desc") },
  ];

  return (
    <div className="about-page-root">

      {/* ── 1. PAGE HEADER ─────────────────────────── */}
      <section className="about-page-header">
        <div className="container">
          <div className="row align-items-start py-5">
            <div className="col-lg-7 col-md-8">
              <motion.h1
                className="about-page-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                {t("title_line1")}<br />{t("title_line2")}
              </motion.h1>
            </div>
            <motion.div
              className="col-lg-5 col-md-4 d-flex flex-column align-items-end justify-content-between"
              style={{ minHeight: "130px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52" aria-hidden="true">
                <line x1="28" y1="3"  x2="28" y2="53" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <line x1="3"  y1="28" x2="53" y2="28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <line x1="8"  y1="8"  x2="48" y2="48" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <line x1="48" y1="8"  x2="8"  y2="48" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
              <nav className="about-breadcrumb">
                <Link href="/" className="about-breadcrumb-link">{t("breadcrumb_home")}</Link>
                <span className="about-breadcrumb-sep">/</span>
                <span className="about-breadcrumb-current">{t("breadcrumb_current")}</span>
              </nav>
            </motion.div>
          </div>
        </div>
        <div className="about-separator" />
      </section>

      {/* ── 2. OUR STORY ───────────────────────────── */}
      <section className="about-story-section">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* Photo */}
            <motion.div
              className="col-12 col-lg-5 col-md-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <div className="about-story-img">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                  alt="Ara Creation team collaborating"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              className="col-12 col-lg-7 col-md-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
            >
              <div className="d-flex align-items-center gap-2 mb-4">
                <span className="about-section-dot" />
                <span className="about-section-label">{t("story_label")}</span>
              </div>
              <h2 className="about-story-headline">{t("story_headline")}</h2>
              <p className="about-story-desc">{t("story_desc1")}</p>
              <p className="about-story-desc mt-3">{t("story_desc2")}</p>
              <Link href="/contact" className="about-outline-btn d-inline-flex align-items-center gap-2 mt-4">
                {t("story_cta")}
                <ArrowUpRight size={13} />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 3. STATS ───────────────────────────────── */}
      <section className="about-stats-section">
        <div className="container">
          <div className="row g-0">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="col-6 col-lg-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                <div className={`about-stat-item${i < stats.length - 1 ? " about-stat-item--border" : ""}`}>
                  <span className="about-stat-value">{stat.value}</span>
                  <span className="about-stat-label">{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CORE VALUES ─────────────────────────── */}
      <section className="about-values-section">
        <div className="container">
          <div className="d-flex align-items-center gap-2 mb-3">
            <span className="about-section-dot" />
            <span className="about-section-label">{t("values_label")}</span>
          </div>
          <h2 className="about-values-headline mb-5">{t("values_headline")}</h2>

          <div className="row g-4">
            {values.map((val, i) => (
              <motion.div
                key={i}
                className="col-12 col-md-4"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <div className="about-value-card h-100">
                  <div className="about-value-number">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="about-value-title">{val.title}</h3>
                  <p className="about-value-desc">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. MISSION BANNER ──────────────────────── */}
      <section className="about-mission-section">
        <div className="container">
          <motion.div
            className="about-mission-card position-relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-mission-orb position-absolute" />
            <div className="position-relative" style={{ zIndex: 1 }}>
              <div className="d-flex align-items-center gap-2 mb-4">
                <span className="about-section-dot about-section-dot--light" />
                <span className="about-section-label about-section-label--light">{t("mission_label")}</span>
              </div>
              <p className="about-mission-text">{t("mission_text")}</p>
              <Link href="/contact" className="about-mission-btn d-inline-flex align-items-center gap-2 mt-4">
                {t("cta_btn")}
                <span className="about-mission-btn-icon d-flex align-items-center justify-content-center">
                  <ArrowUpRight size={14} />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
