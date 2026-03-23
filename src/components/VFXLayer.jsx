import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const VFXLayer = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Cinematic Golden Dust Particles
        const newParticles = Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100 + 'vw',
            delay: Math.random() * 5,
            scale: 0.2 + Math.random() * 0.8,
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="vfx-container"
            style={{
                position: 'fixed',
                top: 0, left: 0,
                width: '100vw', height: '100vh',
                zIndex: 5,
                pointerEvents: 'none',
                overflow: 'hidden'
            }}
        >
            {/* Background Cinematic Dust Field */}
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    initial={{ y: '110vh', opacity: 0 }}
                    animate={{ y: '-10vh', opacity: [0, 0.4, 0] }}
                    transition={{
                        duration: 10 + Math.random() * 10,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "linear",
                    }}
                    style={{
                        position: 'absolute',
                        left: p.x,
                        width: '2px',
                        height: '2px',
                        background: '#d4af37',
                        borderRadius: '50%',
                        filter: 'blur(1px)',
                        scale: p.scale
                    }}
                />
            ))}

            {/* Cinematic Anamorphic Flare - Speed-Ramped Flare */}
            <motion.div
                animate={{
                    y: ['-10vh', '110vh'],
                    opacity: [0, 0.5, 0]
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    width: '200vw',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #fff, #d4af37, transparent)',
                    filter: 'blur(30px) brightness(1.5)',
                    top: '40%',
                    left: '-50%',
                    transform: 'rotate(-10deg)',
                }}
            />
        </div>
    );
};

export default VFXLayer;
