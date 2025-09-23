/**
 * root/seminar/client/src/components/Header.jsx
 * Header component for the seminar website.
 */

export default function Header() {
    return (
        <header className="site-header">
            <div className="header-container">
                <h1 className="site-title">
                    <a href="/"><div className="site-title">電子商取引研究室</div></a>
                </h1>
                <nav className="site-nav">
                    <a href="/research/">- Research</a>
                    <a href="/members/">- Members</a>
                    <a href="/news/">- News</a>
                    <a href="/for-students/">- For Students</a>
                    <a href="/for-industry/">- For Industry</a>
                    <a href="/for-seminar/">- For Seminar</a>
                </nav>
            </div>
        </header>
    );
}
