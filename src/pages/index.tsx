import "@/styles/index.css";
import DefaultLayout from "@/layouts/default";
import { motion } from "framer-motion";
import Carousel from "@/components/Carousel";
import FadeIn from "@/components/FadeIn";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="hero-section">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="hero-greeting">Hello, I'm</p>
          </motion.div>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Jibril Pascua
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="hero-role">Computer Science Senior</p>
            <p className="hero-school">
              University of Texas at San Antonio &middot; Cybersecurity Focus
            </p>
          </motion.div>

          <motion.div
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p>
              Passionate about cybersecurity, full-stack development, and
              community leadership. Currently serving as Vice President of
              Coding In Color and active in ACM, RowdyHacks, and VOICES
              Volunteering at UTSA.
            </p>
          </motion.div>

          <motion.div
            className="hero-tags"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="hero-tag">Cybersecurity</span>
            <span className="hero-tag">Full-Stack Development</span>
            <span className="hero-tag">Community Leadership</span>
          </motion.div>
        </div>

        <motion.div
          className="hero-photo"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="photo-glow">
            <div className="photo-inner">
              <img src="/assets/Jibril-P.jpg" alt="Jibril Pascua" />
            </div>
          </div>
        </motion.div>
      </section>

      <FadeIn className="carousel-section">
        <h2 className="carousel-heading">Community & Leadership</h2>
        <div className="rounded-xl overflow-hidden">
          <Carousel autoSlide={true} autoSlideInterval={4000}>
            <div className="w-full h-80 flex-shrink-0">
              <img src="/assets/cic-rt.jpeg" alt="Coding in Color Retreat" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-80 flex-shrink-0">
              <img src="/assets/rhix.JPG" alt="RowdyHacks" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-80 flex-shrink-0">
              <img src="/assets/voices.jpeg" alt="VOICES Banquet" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-80 flex-shrink-0">
              <img src="/assets/acm-rt.jpg" alt="ACM Retreat" className="w-full h-full object-cover object-bottom" />
            </div>
            <div className="w-full h-80 flex-shrink-0">
              <img src="/assets/acm-bf.JPG" alt="ACM Best Fest" className="w-full h-full object-cover object-bottom" />
            </div>
            <div className="w-full h-80 flex-shrink-0">
              <img src="/assets/epic-move.jpg" alt="EPIC Movement" className="w-full h-full object-cover" />
            </div>
          </Carousel>
        </div>
      </FadeIn>
    </DefaultLayout>
  );
}
