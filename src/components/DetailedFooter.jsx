export default function DetailedFooter() {
    return (
        <footer className="detailed-footer">
            <div className="footer-grid">
                <div className="footer-column">
                    <div className="footer-logo">ETHEREAL</div>
                    <p className="footer-about">
                        Defining modern luxury through the art of scent.
                        Crafted for the bold, the elegant, and the ethereal.
                    </p>
                </div>

                <div className="footer-column">
                    <h4>COLLECTION</h4>
                    <a href="#">Noir Edition</a>
                    <a href="#">Aurora Series</a>
                    <a href="#">Sage Heritage</a>
                    <a href="#">Limited Reserve</a>
                </div>

                <div className="footer-column">
                    <h4>ASSISTANCE</h4>
                    <a href="#">Contact Us</a>
                    <a href="#">Shipping & Returns</a>
                    <a href="#">Care Guide</a>
                    <a href="#">Stockists</a>
                </div>

                <div className="footer-column">
                    <h4>LEGAL</h4>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Cookies</a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 ETHEREAL LUXURY. POWERED BY CINEMATIC DESIGN.</p>
                <div className="social-links">
                    <a href="#">INSTAGRAM</a>
                    <a href="#">PINTEREST</a>
                    <a href="#">FACEBOOK</a>
                </div>
            </div>
        </footer>
    );
}
