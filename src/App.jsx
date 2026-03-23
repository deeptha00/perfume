import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LandingSection from './sections/LandingSection';
import RevealSection from './sections/RevealSection';
import CollectionSection from './sections/CollectionSection';
import TestimonialSection from './sections/TestimonialSection';
import NewsletterSection from './sections/NewsletterSection';
import Navigation from './components/Navigation';
import DetailedFooter from './components/DetailedFooter';
import VFXLayer from './components/VFXLayer';
import './App.css';

function App() {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        // Elegant single-fade entrance
        const timer = setTimeout(() => setIsReady(true), 150);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="app-root">
            <AnimatePresence>
                {!isReady && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="clean-preloader"
                    />
                )}
            </AnimatePresence>

            <Navigation />
            <VFXLayer />

            <main>
                <LandingSection />
                <RevealSection />
                <CollectionSection />
                <TestimonialSection />
                <NewsletterSection />
            </main>

            <DetailedFooter />
        </div>
    );
}

export default App;
