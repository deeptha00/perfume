import { motion } from 'framer-motion';

const products = [
    { id: 1, name: 'MIRAGE', category: 'Celestial Mist', price: '$345.00', image: '/images/luxury_product1.png' },
    { id: 2, name: 'ONYX', category: 'After Dark', price: '$375.00', image: '/images/luxury_product2.png' },
    { id: 3, name: 'AMBER', category: 'Sunset Gold', price: '$410.00', image: '/images/luxury_product3.png' },
];

const ProductGrid = () => {
    return (
        <section className="promo-section" id="gallery" style={{ padding: '150px 5%' }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '40px'
            }}>
                {products.map((product, idx) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 100, scale: 0.9, filter: 'blur(20px)' }}
                        whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                        viewport={{ once: true, margin: '-10%' }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: idx * 0.15 }}
                        style={{
                            height: '650px',
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            position: 'relative',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            transformStyle: 'preserve-3d'
                        }}
                        whileHover={{
                            scale: 0.98,
                            borderColor: 'rgba(255, 255, 255, 0.4)',
                            backgroundColor: 'rgba(255, 255, 255, 0.06)'
                        }}
                    >
                        <motion.img
                            src={product.image}
                            alt={product.name}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '80%',
                                transition: '1s cubic-bezier(0.16, 1, 0.3, 1)'
                            }}
                            whileHover={{
                                scale: 1.15,
                                rotate: 5,
                                y: '-60%',
                                filter: 'drop-shadow(0 30px 60px rgba(212, 175, 55, 0.3))'
                            }}
                        />

                        <div style={{
                            position: 'absolute',
                            bottom: '50px',
                            left: '50px',
                            transform: 'translateZ(50px)'
                        }}>
                            <p style={{
                                color: '#d4af37',
                                letterSpacing: '5px',
                                fontSize: '10px',
                                fontWeight: '700',
                                textTransform: 'uppercase'
                            }}>{product.category}</p>
                            <h3 style={{
                                fontFamily: "'Bodoni Moda', serif",
                                fontSize: '36px',
                                marginTop: '5px'
                            }}>{product.name}</h3>
                            <p style={{ marginTop: '5px', opacity: 0.6 }}>{product.price}</p>

                            <motion.button
                                whileHover={{ scale: 1.1, background: 'white', color: 'black' }}
                                style={{
                                    marginTop: '20px',
                                    padding: '12px 30px',
                                    fontSize: '10px',
                                    letterSpacing: '3px'
                                }}
                            >
                                Acquire Now
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ProductGrid;
