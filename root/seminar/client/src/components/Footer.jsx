/**
 * root/seminar/client/src/components/Footer.jsx
 * Footer component for the seminar website.
 */

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="/research/">- Research</a>
          <a href="/members/">- Members</a>
          <a href="/news/">- News</a>
          <a href="/for-students/">- For Students</a>
          <a href="/for-industry/">- For Industry</a>
          <a href="/for-seminar/">- For Seminar</a>
          <a href="/contact/">- Contact</a>
        </div>

        <div className="footer-info">
          近畿大学 情報学部・大学院 情報学研究科<br />
          〒577-8502 大阪府東大阪市小若江3-4-1<br />
          <span className="tel">TEL (06)6721-2332</span>
        </div>

        <div className="footer-logo">
          <img src="/img/Logo_transparent.png" alt="KDIX Logo" />
        </div>
      </div>
    </footer>
  );
}
