import { motion } from 'framer-motion';

export default function NewsletterSection() {
    return (
        <section className="newsletter-section">
            <div className="newsletter-content">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    Join the Ethereal Club
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Be the first to know about exclusive collections and brand stories.
                </motion.p>

                <motion.form
                    className="newsletter-form"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <input type="email" placeholder="YOUR EMAIL ADDRESS" />
                    <button type="submit">SUBSCRIBE</button>
                </motion.form>
            </div>
        </section>
    );
}
