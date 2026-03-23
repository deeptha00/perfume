import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function RevealSection() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    // Clean slide up transitions - Tighter for less blank space
    const panelY = useTransform(scrollYProgress, [0, 0.3], ['20vh', '0vh']);
    const panelO = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

    const textX = useTransform(scrollYProgress, [0, 0.3], [-40, 0]);
    const textO = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

    return (
        <section className="reveal-section" ref={sectionRef}>
            <div className="reveal-sticky">
                <div className="panel-left">
                    <motion.h2
                        className="reveal-title"
                        style={{ x: textX, opacity: textO }}
                    >
                        Crafted for the<br />Bold & Ethereal
                    </motion.h2>

                    <motion.p
                        className="reveal-body"
                        style={{ x: textX, opacity: textO }}
                    >
                        Our scents are distilled from the rarest botanicals,
                        blending heritage techniques with a vision of local modernity.
                        Pure. Sharp. Indelible.
                    </motion.p>

                    <motion.button
                        className="card-btn"
                        style={{ x: textX, opacity: textO }}
                        whileHover={{ letterSpacing: '8px' }}
                    >
                        View Heritage
                    </motion.button>
                </div>

                <div className="panel-right">
                    <motion.div
                        style={{ height: '100%', y: panelY, opacity: panelO }}
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}images/luxury_banner.png`}
                            alt="AZWAZ Collection Detail"
                            className="panel-right-image"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
