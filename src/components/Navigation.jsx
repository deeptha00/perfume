import { motion } from 'framer-motion';

export default function Navigation() {
    return (
        <motion.nav
            className="floating-nav"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        >
            <div className="nav-logo">ETHEREAL</div>

            <div className="nav-links">
                <a href="#home">Home</a>
                <a href="#collection">Collection</a>
                <a href="#heritage">Heritage</a>
                <a href="#stories">Stories</a>
            </div>

            <div className="nav-actions">
                <motion.span whileHover={{ color: '#fff' }} style={{ cursor: 'pointer' }}>SEARCH</motion.span>
                <motion.span whileHover={{ color: '#fff' }} style={{ cursor: 'pointer' }}>ACCOUNT</motion.span>
                <div className="nav-bag">
                    <span>BAG</span>
                    <span className="bag-count">0</span>
                </div>
            </div>
        </motion.nav>
    );
}
