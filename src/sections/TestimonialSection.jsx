import { motion } from 'framer-motion';

export default function TestimonialSection() {
    return (
        <section className="testimonial-section" id="stories">
            <motion.div
                className="testimonial-container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
                <p className="testimonial-quote">
                    "A scent that doesn't just linger; it tells a story of elegance and mystery.
                    AURORA has become a permanent part of my identity."
                </p>
                <div className="testimonial-author">
                    <span className="author-name">ELENA KOSTAS</span>
                    <span className="author-title">Creative Director, Vogue</span>
                </div>
            </motion.div>
        </section>
    );
}
