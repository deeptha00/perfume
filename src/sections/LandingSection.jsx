import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function LandingSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

    // Luxury Parallax & Zoom
    const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
    const contentY = useTransform(scrollYProgress, [0, 0.5], ['0px', '-60px']);
    const contentO = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

    return (
        <section className="landing-section" id="home" ref={ref}>
            <motion.div
                className="landing-bg-wrap"
                style={{ position: 'absolute', inset: 0, scale: imgScale, y: imgY }}
            >
                <img
                    src={`${import.meta.env.BASE_URL}images/banner.png`}
                    alt="ETHEREAL Luxury"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.9,
                        filter: 'brightness(0.85) contrast(1.1)'
                    }}
                />
            </motion.div>

            <div className="landing-overlay" />

            <motion.div
                className="landing-content"
                style={{ y: contentY, opacity: contentO }}
            >
                <motion.p
                    className="landing-subtitle"
                    initial={{ opacity: 0, y: 20, letterSpacing: '25px' }}
                    animate={{ opacity: 1, y: 0, letterSpacing: '12px' }}
                    transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
                >
                    L'ESSENCE DE LA NUIT
                </motion.p>

                <motion.h1
                    className="landing-title"
                    initial={{ opacity: 0, y: 30, filter: 'blur(15px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                >
                    ETHEREAL
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.8 }}
                >
                    <a href="#collection" className="landing-cta">
                        EXPLORE COLLECTION
                    </a>
                </motion.div>
            </motion.div>

            <motion.div
                className="landing-scroll-hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 2.5 }}
            >
                <span>SCROLL</span>
                <div className="hint-line" />
            </motion.div>
        </section>
    );
}
