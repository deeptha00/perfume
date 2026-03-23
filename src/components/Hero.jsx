import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Modern Parallax and Zoom effects on the banner image
    const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.5]);
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const blur = useTransform(scrollYProgress, [0, 0.5], [0, 10]);

    return (
        <section
            ref={containerRef}
            style={{
                height: '100vh',
                width: '100vw',
                position: 'relative',
                overflow: 'hidden',
                background: '#000'
            }}
        >
            {/* Background Banner with Parallax & Slow Zoom */}
            <motion.div
                initial={{ scale: 1.3, opacity: 0, filter: 'blur(20px)' }}
                animate={{ scale: 1.1, opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    scale,
                    y,
                    opacity: 0.8
                }}
            >
                <img
                    src={`${import.meta.env.BASE_URL}images/banner.png`}
                    alt="Luxury Perfume Banner"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'contrast(1.1) brightness(0.7)'
                    }}
                />

                {/* Dynamic Light Glow around the bottle area (centered) */}
                <motion.div
                    animate={{
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '40vw',
                        height: '40vw',
                        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 70%)',
                        filter: 'blur(80px)',
                        pointerEvents: 'none'
                    }}
                />
            </motion.div>

            {/* Cinematic Content Reveal */}
            <div style={{
                position: 'relative',
                zIndex: 10,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '0 10%'
            }}>
                <motion.div
                    initial={{ y: 50, opacity: 0, letterSpacing: '30px' }}
                    animate={{ y: 0, opacity: 1, letterSpacing: '15px' }}
                    transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                    style={{
                        opacity
                    }}
                >
                    <h2 style={{
                        fontFamily: "'Bodoni Moda', serif",
                        fontSize: '14px',
                        color: '#d4af37',
                        textTransform: 'uppercase',
                        marginBottom: '20px'
                    }}>
                        The Essence of Purity
                    </h2>
                    <h1 style={{
                        fontFamily: "'Bodoni Moda', serif",
                        fontSize: 'clamp(60px, 10vw, 120px)',
                        fontWeight: '200',
                        lineHeight: 1,
                        marginBottom: '40px',
                        textShadow: '0 20px 40px rgba(0,0,0,0.5)'
                    }}>
                        AURORA<br /><span style={{ fontSize: '0.4em', letterSpacing: '5px', opacity: 0.5 }}>COLLECTION</span>
                    </h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                    >
                        <button style={{
                            padding: '20px 60px',
                            background: 'transparent',
                            border: '2px solid white',
                            color: 'white',
                            fontSize: '11px',
                            letterSpacing: '5px',
                            fontWeight: '900'
                        }}>
                            DISCOVER MORE
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Modern Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    bottom: '40px',
                    width: '1px',
                    height: '60px',
                    background: 'linear-gradient(to bottom, white, transparent)',
                    opacity: 0.5
                }}
            />
        </section>
    );
};

export default Hero;
