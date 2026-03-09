import { motion } from 'framer-motion';

const perfumes = [
    { id: 1, name: 'NOIR', category: 'Night Mist', price: '$225', image: 'images/luxury_product1.png' },
    { id: 2, name: 'AURORA', category: 'Dawn Light', price: '$285', image: 'images/luxury_product2.png' },
    { id: 3, name: 'SAGE', category: 'Forest Dew', price: '$195', image: 'images/luxury_product3.png' },
];

export default function CollectionSection() {
    return (
        <section className="collection-section" id="collection">
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                style={{ textAlign: 'center', marginBottom: '80px' }}
            >
                <p style={{ fontSize: '10px', letterSpacing: '8px', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '15px' }}>Discover the Essence</p>
                <h2 style={{ fontFamily: 'Bodoni Moda, serif', fontSize: '48px', fontWeight: '200', letterSpacing: '10px' }}>THE COLLECTION</h2>
            </motion.div>

            <div className="product-grid">
                {perfumes.map((perfume, idx) => (
                    <motion.div
                        key={perfume.id}
                        className="product-card"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: '-20%' }}
                        transition={{ duration: 1.5, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <motion.img
                            src={`${import.meta.env.BASE_URL}${perfume.image}`}
                            alt={perfume.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 2, delay: idx * 0.2 + 0.4, ease: 'easeOut' }}
                        />

                        <div className="card-info">
                            <p className="card-eyebrow">{perfume.category}</p>
                            <h3 className="card-name">{perfume.name}</h3>
                            <p className="card-price" style={{ opacity: 0.5, letterSpacing: '2px', fontSize: '11px', marginTop: '10px' }}>{perfume.price}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
