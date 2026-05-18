"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/routing";

export default function AdShootPage() {
  const t = useTranslations("AdShoot");

  const stats = [
    { value: t("stat1_value"), label: t("stat1_label") },
    { value: t("stat2_value"), label: t("stat2_label") },
    { value: t("stat3_value"), label: t("stat3_label") },
  ];

  const blogs = [
    {
      tag: t("blog_1_tag"),
      title: t("blog_1_title"),
      read: t("blog_1_read"),
      date: t("blog_1_date"),
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
    },
    {
      tag: t("blog_2_tag"),
      title: t("blog_2_title"),
      read: t("blog_2_read"),
      date: t("blog_2_date"),
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    },
    {
      tag: t("blog_3_tag"),
      title: t("blog_3_title"),
      read: t("blog_3_read"),
      date: t("blog_3_date"),
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
    },
    {
      tag: t("blog_4_tag"),
      title: t("blog_4_title"),
      read: t("blog_4_read"),
      date: t("blog_4_date"),
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const logoNames = ["LOREM", "LOGOZEN", "LOGOIPSUM", "LOCO·", "IPSUM", "LOREM", "LOGOZEN", "LOGOIPSUM", "LOCO·", "IPSUM",
    "LOREM", "LOGOZEN", "LOGOIPSUM", "LOCO·", "IPSUM", "LOREM", "LOGOZEN", "LOGOIPSUM", "LOCO·", "IPSUM"];

  return (
    <div className="ad-page-root">

      {/* ── 1. PAGE HEADER ─────────────────────────────── */}
      <section className="ad-page-header">
        <div className="container">
          <div className="row align-items-start py-5">
            <div className="col-lg-7 col-md-8">
              <motion.h1
                className="ad-page-title"
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
                <line x1="28" y1="3"  x2="28" y2="53" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                <line x1="3"  y1="28" x2="53" y2="28" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                <line x1="8"  y1="8"  x2="48" y2="48" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                <line x1="48" y1="8"  x2="8"  y2="48" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
              <nav className="ad-breadcrumb">
                <Link href="/" className="ad-breadcrumb-link">{t("breadcrumb_home")}</Link>
                <span className="ad-breadcrumb-sep">/</span>
                <span className="ad-breadcrumb-current">{t("breadcrumb_current")}</span>
              </nav>
            </motion.div>
          </div>
        </div>
        <div className="ad-separator" />
      </section>

      {/* ── 2. WHO WE ARE ──────────────────────────────── */}
      <section className="ad-who-section">
        <div className="container" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
          <div className="row align-items-center g-5">

            {/* Left: label + wireframe illustration */}
            <motion.div
              className="col-lg-4 col-md-5"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <div className="d-flex align-items-center gap-2 mb-4">
                <span className="ad-section-dot" />
                <span className="ad-section-label">{t("who_label")}</span>
              </div>
              <div className="ad-illustration">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block" }}>
                  <rect x="8" y="8" width="184" height="184" rx="4" stroke="#ddd" strokeWidth="1.5"/>
                  <line x1="8" y1="46" x2="192" y2="46" stroke="#e5e5e5" strokeWidth="1"/>
                  <rect x="8" y="8" width="184" height="38" rx="4" fill="#f5f5f5"/>
                  <circle cx="28" cy="27" r="6" fill="#e0e0e0"/>
                  <circle cx="48" cy="27" r="6" fill="#e0e0e0"/>
                  <circle cx="68" cy="27" r="6" fill="#e0e0e0"/>
                  <rect x="22" y="58" width="72" height="60" rx="4" fill="#f0f0f0" stroke="#e0e0e0" strokeWidth="1"/>
                  <rect x="22" y="58" width="72" height="20" rx="4" fill="#e5e5e5"/>
                  <line x1="32" y1="90" x2="84" y2="90" stroke="#d0d0d0" strokeWidth="1.5"/>
                  <line x1="32" y1="100" x2="78" y2="100" stroke="#d0d0d0" strokeWidth="1.5"/>
                  <line x1="32" y1="110" x2="72" y2="110" stroke="#d0d0d0" strokeWidth="1.5"/>
                  <rect x="106" y="58" width="72" height="60" rx="4" fill="#f0f0f0" stroke="#e0e0e0" strokeWidth="1"/>
                  <circle cx="142" cy="80" r="14" stroke="#d0d0d0" strokeWidth="1.5" fill="#e8e8e8"/>
                  <line x1="116" y1="106" x2="168" y2="106" stroke="#d0d0d0" strokeWidth="1.5"/>
                  <line x1="22" y1="134" x2="178" y2="134" stroke="#ebebeb" strokeWidth="1"/>
                  <line x1="22" y1="148" x2="155" y2="148" stroke="#ebebeb" strokeWidth="1"/>
                  <line x1="22" y1="162" x2="130" y2="162" stroke="#ebebeb" strokeWidth="1"/>
                  <line x1="22" y1="176" x2="100" y2="176" stroke="#ebebeb" strokeWidth="1"/>
                </svg>
              </div>
            </motion.div>

            {/* Right: description text + CTA */}
            <motion.div
              className="col-lg-8 col-md-7"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
            >
              <p className="ad-who-desc">{t("who_desc")}</p>
              <Link href="/about" className="ad-outline-btn d-inline-flex align-items-center gap-2 mt-4">
                {t("who_cta")}
                <ArrowUpRight size={13} />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 3. STATS + TEAM PHOTO ──────────────────────── */}
      <section className="ad-stats-section">
        <div className="container" style={{ paddingBottom: "4rem" }}>
          <div className="row align-items-center g-5">

            {/* Stats */}
            <div className="col-lg-5 col-md-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="ad-stat-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                >
                  <span className="ad-stat-value">{stat.value}</span>
                  <span className="ad-stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Team photo */}
            <motion.div
              className="col-lg-7 col-md-6"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="ad-team-photo">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
                  alt="Creative team at work"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 4. VIDEO BANNER ───────────────────────────── */}
      <section className="ad-banner-section">
        {/* Video background */}
        <video
          className="ad-banner-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/images/videos/hero_1.mov" type="video/mp4" />
        </video>
        <div className="ad-banner-overlay" />
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div style={{ padding: "5rem 0" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="ad-banner-tag">{t("banner_tag")}</span>
            </motion.div>
            <motion.h2
              className="ad-banner-headline"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.15 }}
            >
              {t("banner_headline")}
            </motion.h2>
          </div>
        </div>
      </section>

      {/* ── 5. TRUSTED CLIENTS MARQUEE ─────────────────── */}
      <section className="ad-clients-section">
        <div className="container text-center" style={{ paddingTop: "2rem", paddingBottom: "1rem" }}>
          <p className="ad-clients-title">{t("clients_title")}</p>
        </div>
        <div className="marquee-container" style={{ background: "#fff", borderTop: "1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0" }}>
          <div className="marquee-content">
            {logoNames.map((logo, i) => (
              <span key={i} className="ad-client-logo-item">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. BLOG / NEWS ─────────────────────────────── */}
      <section className="ad-blog-section">
        <div className="container" style={{ paddingTop: "4rem", paddingBottom: "5rem" }}>

          {/* Header */}
          <div className="d-flex align-items-end justify-content-between flex-wrap gap-3 mb-5">
            <div>
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="ad-section-dot" />
                <span className="ad-section-label">{t("blog_label")}</span>
              </div>
              <h2 className="ad-blog-title">{t("blog_title")}</h2>
            </div>
            <button type="button" className="ad-outline-btn d-inline-flex align-items-center gap-2">
              {t("blog_cta")}
              <ArrowUpRight size={13} />
            </button>
          </div>

          {/* Grid: 1 large card (left) + 3 small cards (right) */}
          <div className="row g-4">

            {/* Large card */}
            <div className="col-12 col-md-6">
              <motion.div
                className="ad-blog-card h-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="ad-blog-img-large">
                  <img src={blogs[0].image} alt={blogs[0].title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }} />
                </div>
                <div className="ad-blog-body">
                  <span className="ad-blog-tag">{blogs[0].tag}</span>
                  <h3 className="ad-blog-card-title">{blogs[0].title}</h3>
                  <div className="ad-blog-meta">
                    <span>⏱ {blogs[0].read}</span>
                    <span>📅 {blogs[0].date}</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* 3 small cards stacked */}
            <div className="col-12 col-md-6 d-flex flex-column gap-3">
              {blogs.slice(1).map((blog, i) => (
                <motion.div
                  key={i}
                  className="ad-blog-card ad-blog-card-sm d-flex gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="ad-blog-img-sm flex-shrink-0">
                    <img src={blog.image} alt={blog.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }} />
                  </div>
                  <div className="ad-blog-body-sm">
                    <span className="ad-blog-tag">{blog.tag}</span>
                    <h3 className="ad-blog-card-title-sm">{blog.title}</h3>
                    <div className="ad-blog-meta">
                      <span>⏱ {blog.read}</span>
                      <span>📅 {blog.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
