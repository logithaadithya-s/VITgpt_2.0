import "../styles/Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="vitgpt-footer">
      <div className="footer-top">
        <p>Your academic companion!</p>
        <h1>Let's Elevate Learning</h1>
      </div>
    
      <div className="footer-content">
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p><a href="mailto:support@vitgpt.com">support@vitgpt.com</a></p>
        </div>
    
        <div className="footer-column">
          <a href="#contact" className="quote-btn-link">
            <button className="quote-btn">Contact</button>
          </a>
        </div>
    
        <div className="footer-column">
          <h3>Support</h3>
          <p>Available 24/7 for student queries</p>
        </div>
      </div>
    
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>
      </div>
    
      <div className="footer-bottom">
        <p>© 2025 VITGPT. All Rights Reserved.</p>
        <button onClick={scrollToTop} className="back-to-top">
          Back to Top ↑
        </button>
      </div>
    </footer>
  );
}

export default Footer;