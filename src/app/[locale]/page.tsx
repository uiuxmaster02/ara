"use client";

import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("Index");
  const containerRef = useRef<HTMLDivElement>(null);
  const [clientLogos, setClientLogos] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/clients")
      .then((r) => r.json())
      .then((files: string[]) => setClientLogos(files))
      .catch(() => {});
  }, []);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    if (carouselRef.current) {
      setStartX(e.pageX - carouselRef.current.offsetLeft);
      setScrollLeft(carouselRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    if (carouselRef.current) {
      const x = e.pageX - carouselRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const services = [
    { id: "ad", title: t("service_ad"), desc: t("service_ad_desc"), image: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?q=80&w=800&auto=format&fit=crop" },
    { id: "video", title: t("service_video"), desc: t("service_video_desc"), image: "https://images.unsplash.com/photo-1579168765467-3b235f938439?q=80&w=800&auto=format&fit=crop" },
    { id: "photo", title: t("service_photo"), desc: t("service_photo_desc"), image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&auto=format&fit=crop" },
    { id: "web", title: t("service_web"), desc: t("service_web_desc"), image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop" },
    { id: "app", title: t("service_app"), desc: t("service_app_desc"), image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop" },
    { id: "social", title: t("service_social"), desc: t("service_social_desc"), image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop" },
  ];

  const testimonials = [
    { id: 1, author: t("test_1_author"), role: t("test_1_role"), text: t("test_1_text") },
    { id: 2, author: t("test_2_author"), role: t("test_2_role"), text: t("test_2_text") },
    { id: 3, author: t("test_3_author"), role: t("test_3_role"), text: t("test_3_text") },
  ];

  return (
    <div ref={containerRef} className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1 overflow-hidden">

        {/* 1. Hero Section */}
        <section
          className="hero-section position-relative"
          style={{ height: "100vh", overflow: "hidden" }}
        >
          {/* Background — all layers clipped here */}
          <div
            className="position-absolute w-100 h-100"
            style={{ top: 0, left: 0, zIndex: 0, pointerEvents: "none" }}
          >
            <div className="hero-bg-deep position-absolute w-100 h-100" style={{ top: 0, left: 0 }} />
            <div className="hero-orb hero-orb--green position-absolute" />
            <div className="hero-orb hero-orb--blue position-absolute" />
            <div className="hero-orb hero-orb--purple position-absolute" />
            <div className="hero-aurora position-absolute w-100" style={{ top: 0, left: 0, height: "55%" }} />
            <video
              autoPlay loop muted playsInline
              style={{
                position: "absolute", top: 0, left: 0,
                width: "100%", height: "100%",
                objectFit: "cover", opacity: 0.42, pointerEvents: "none"
              }}
            >
              <source src="/images/videos/hero_1.mov" />
            </video>
            <div className="hero-vignette position-absolute w-100 h-100" style={{ top: 0, left: 0 }} />
          </div>

          {/* Centered hero content with parallax */}
          <motion.div
            style={{
              y: y1,
              opacity,
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              textAlign: "center",
              paddingTop: "80px",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mb-4"
            >
              <span className="hero-live-badge">
                <span className="hero-live-dot" />
                {t("hero_badge")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.12 }}
              className="hero-headline mb-4"
            >
              {t("hero_title")} <br />
              <span className="hero-headline-accent">{t("hero_highlight")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              className="hero-subheadline mb-5"
            >
              {t("hero_sub")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }}
              className="d-flex gap-3 flex-wrap justify-content-center mb-3"
            >
              <Link href="/contact" className="hero-cta-primary">
                {t("get_started")}
                <ArrowRight size={16} style={{ marginLeft: "0.5rem" }} />
              </Link>
              <Link href="/ad-shoot" className="hero-cta-secondary">
                {t("our_services")}
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="hero-trust-line"
            >
              {t("hero_trust_line")}
            </motion.p>
          </motion.div>

          {/* Bottom-right: Client trust card — mirrors TradingView astronaut card */}
          <motion.div
            className="hero-trust-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            aria-hidden="true"
          >
            <div className="d-flex align-items-center gap-2 mb-2">
              <div className="hero-trust-avatar">{t("hero_trust_name").charAt(0)}</div>
              <div>
                <p className="hero-trust-name">{t("hero_trust_name")}</p>
                <p className="hero-trust-role">{t("hero_trust_role")}</p>
              </div>
            </div>
            <p className="hero-trust-quote">&ldquo;{t("hero_trust_quote")}&rdquo;</p>
            <div className="d-flex align-items-center justify-content-between mt-2">
              <div className="hero-trust-stars">★★★★★</div>
              <span className="hero-trust-badge-pill">{t("hero_trust_verified")}</span>
            </div>
          </motion.div>

          {/* Bottom-left: Live metric bubble */}
          <motion.div
            className="hero-live-stat"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            aria-hidden="true"
          >
            <div className="d-flex align-items-center gap-2">
              <div className="hero-live-stat-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5fd640" strokeWidth="2.5">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <div>
                <p className="hero-live-stat-value">{t("hero_stat_value")}</p>
                <p className="hero-live-stat-label">{t("hero_stat_label")}</p>
              </div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="hero-scroll-indicator"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          >
            <div className="hero-scroll-mouse">
              <div className="hero-scroll-wheel" />
            </div>
          </motion.div>
        </section>

        {/* 2. Logo Marquee */}
        {clientLogos.length > 0 && (
          <section className="marquee-container d-none d-md-block">
            <div className="marquee-content">
              {/* Duplicate the list so the scroll loop is seamless */}
              {[...clientLogos, ...clientLogos].map((file, i) => (
                <span key={i} className="marquee-item">
                  <Image
                    src={`/images/clients/${file}`}
                    alt={file.replace(/\.[^.]+$/, "")}
                    width={120}
                    height={48}
                    style={{ objectFit: "contain", height: "48px", width: "auto" }}
                  />
                </span>
              ))}
            </div>
          </section>
        )}

        {/* 3. Services Horizontal Scroll */}
        <section className="py-5 light-bg-section overflow-hidden">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="d-flex justify-content-between align-items-end mb-5">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="col-lg-8"
                  >
                    <h2 className="display-3 fw-bold mb-3 lh-1" style={{ color: "var(--primary-color)" }}>{t("intro_title")}</h2>
                    <p className="fs-5 text-body-custom opacity-75 mt-3">
                      {t("intro_desc")}
                    </p>
                  </motion.div>

                  <div className="d-flex gap-3 d-none d-md-flex">
                    <button
                      onClick={scrollPrev}
                      className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center p-0"
                      style={{ width: "48px", height: "48px", borderColor: "var(--border-color)", backgroundColor: "var(--bg-color)" }}
                    >
                      <ArrowLeft size={20} style={{ color: "var(--primary-color)" }} />
                    </button>
                    <button
                      onClick={scrollNext}
                      className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center p-0"
                      style={{ width: "48px", height: "48px", borderColor: "var(--border-color)", backgroundColor: "var(--bg-color)" }}
                    >
                      <ArrowRight size={20} style={{ color: "var(--primary-color)" }} />
                    </button>
                  </div>
                </div>

                <motion.div
                  ref={carouselRef}
                  className="d-flex gap-4 hide-scrollbar"
                  style={{
                    overflowX: "auto",
                    cursor: isDragging ? "grabbing" : "grab",
                    scrollBehavior: isDragging ? "auto" : "smooth",
                    scrollSnapType: isDragging ? "none" : "x mandatory",
                    WebkitOverflowScrolling: "touch",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none"
                  }}
                  onMouseDown={handleMouseDown}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseUp}
                  onMouseMove={handleMouseMove}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                    hidden: {}
                  }}
                >
                  {services.map((service) => (
                    <motion.div
                      key={service.id}
                      variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
                      }}
                      className="flex-shrink-0"
                      style={{ width: "320px", scrollSnapAlign: "start" }}
                    >
                      <motion.div
                        className="position-relative overflow-hidden shadow-sm"
                        style={{ height: "480px", borderRadius: "16px", backgroundColor: "#111", pointerEvents: isDragging ? "none" : "auto" }}
                        whileHover="hover"
                      >
                        {/* Full Bleed Background Image */}
                        <motion.div
                          className="position-absolute w-100 h-100"
                          style={{
                            backgroundImage: `url('${service.image}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                          }}
                          variants={{
                            hover: { scale: 1.05 }
                          }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                        />

                        {/* Subtle Gradient Overlay for Text Readability */}
                        <div
                          className="position-absolute w-100 h-100"
                          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0) 100%)", pointerEvents: "none" }}
                        />

                        {/* Content */}
                        <div className="position-absolute w-100 h-100 d-flex flex-column justify-content-end p-4">
                          <h3 className="h4 fw-bold mb-2" style={{ color: "var(--primary-color)" }}>{service.title}</h3>
                          <p className="text-white opacity-75 mb-4" style={{ fontSize: "0.95rem", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                            {service.desc}
                          </p>

                          {/* Interaction Footer */}
                          <div className="mt-auto pt-3 d-flex align-items-center justify-content-between" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
                            <span className="fw-bold text-uppercase" style={{ color: "var(--primary-color)", letterSpacing: "1px", fontSize: "0.85rem" }}>{t("know_more")}</span>
                            <motion.div
                              variants={{ hover: { x: 5 } }}
                              className="d-flex align-items-center justify-content-center"
                              style={{ color: "var(--primary-color)" }}
                            >
                              <ArrowRight size={22} strokeWidth={2.5} />
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Creative Studio Showcase */}
        <section className="container py-5">
          <div className="position-relative w-100 overflow-hidden" style={{ minHeight: "600px", backgroundColor: "#0a0a0a", borderRadius: "16px" }}>

            {/* Video Background */}
            <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, zIndex: 0 }}>
              <video
                autoPlay loop muted playsInline
                className="w-100 h-100 opacity-50"
                style={{ objectFit: "cover", pointerEvents: "none" }}
              >
                <source src="/images/videos/hero_1.mov" />
              </video>
              <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, background: "linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.8) 100%)", pointerEvents: "none" }} />
            </div>

            <div className="container position-relative z-1 p-5 d-flex flex-column justify-content-between" style={{ minHeight: "600px" }}>
              <div className="row align-items-start h-100 flex-grow-1">

                {/* Left Column: Title and Description */}
                <div className="col-md-8 col-lg-8 d-flex flex-column justify-content-between h-100">
                  <div>
                    <div className="mb-3">
                      <span className="hero-live-badge" style={{ fontSize: "0.75rem" }}>
                        <span className="hero-live-dot" />
                        Ara Creation Studio
                      </span>
                    </div>
                    <h2 className="display-3 fw-bold lh-1 text-white">
                      <span style={{ color: "#e6ff7a" }}>{t("showcase_title1")}</span><br />
                      <span style={{ color: "#e6ff7a" }}>{t("showcase_title2")}</span><br />
                      {t("showcase_title3")}
                    </h2>
                  </div>
                  <div className="mt-auto pt-5 pb-3" style={{ maxWidth: "450px" }}>
                    <p className="text-white fw-bold mb-0" style={{ fontSize: "1.05rem", lineHeight: "1.6" }}>
                      {t("showcase_desc")}
                    </p>
                  </div>
                </div>

                {/* Right Column: Stat and Arrow */}
                <div className="col-md-4 col-lg-4 d-flex flex-column justify-content-between align-items-end h-100 text-end">
                  <div className="d-flex flex-column align-items-end mt-4">
                    <div className="fw-bold" style={{ color: "#e6ff7a", fontSize: "7.5rem", letterSpacing: "-4px", lineHeight: "0.85" }}>
                      200+
                    </div>
                    <span className="text-white fw-bold fs-4 mt-2">{t("showcase_stat_label")}</span>
                  </div>
                  <div className="mt-auto pb-3">
                    <Link href="/contact">
                      <motion.div whileHover={{ x: 10 }} style={{ cursor: "pointer" }}>
                        <ArrowRight size={100} className="text-white" strokeWidth={1} />
                      </motion.div>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>


        {/* 5. Testimonials */}
        <section className="py-5 light-bg-section">
          <div className="container text-center">
            <h2 className="display-6 fw-bold mb-5">{t("testimonials_title")}</h2>
            <div className="row g-4 justify-content-center">
              {testimonials.map((test) => (
                <motion.div
                  key={test.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: test.id * 0.1 }}
                  className="col-md-6 col-lg-4"
                >
                  <div className="testimonial-card text-start d-flex flex-column">
                    <div className="d-flex align-items-center mb-4 gap-3">
                      <div className="rounded-circle bg-dark text-white d-flex align-items-center justify-content-center fw-bold" style={{ width: "48px", height: "48px" }}>
                        {test.author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="h6 mb-0 fw-bold">{test.author}</h4>
                        <span className="text-muted small">{test.role}</span>
                      </div>
                    </div>
                    <p className="text-body-custom opacity-75 flex-grow-1 fst-italic">
                      "{test.text}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


      </main>
    </div>
  );
}
