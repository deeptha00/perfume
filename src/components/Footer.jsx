import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
                padding: '150px 10% 80px',
                textAlign: 'center',
                background: '#050505',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)'
            }}
        >
            <motion.div
                animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    fontFamily: "'Bodoni Moda', serif",
                    fontSize: '48px',
                    fontStyle: 'italic',
                    color: '#d4af37',
                    marginBottom: '80px',
                    letterSpacing: '2px'
                }}
            >
                What if I transform this?
            </motion.div>

            <div style={{
                fontFamily: "'Bodoni Moda', serif",
                fontSize: 'clamp(50px, 12vw, 120px)',
                letterSpacing: '50px',
                opacity: 0.1,
                marginBottom: '50px',
                marginLeft: '50px' // Compensate for tailing letter-spacing
            }}>
                ETHEREAL
            </div>

            <p style={{
                opacity: 0.4,
                letterSpacing: '8px',
                fontSize: '11px',
                textTransform: 'uppercase'
            }}>
                PARIS • NEW YORK • TOKYO • MILAN
            </p>

            <p style={{
                marginTop: '40px',
                opacity: 0.2,
                fontSize: '8px',
                letterSpacing: '5px'
            }}>
                EXCLUSIVITY IN EVERY BREATH. ALL RIGHTS RESERVED &copy; 2026.
            </p>

        </motion.footer>
    );
};

export default Footer;
