import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h3 className="header__logo">joblly</h3>
      <div className="header__main-content">
        <nav className="header__nav">
          <ol className="header__nav-list">
            <li className="header__nav-item">
              <a href="/" className="header__nav-item-link">
                home
              </a>
            </li>
            <li className="header__nav-item">
              <a href="/" className="header__nav-item-link">
                jobs
              </a>
            </li>
            <li className="header__nav-item">
              <a href="/" className="header__nav-item-link">
                page
              </a>
            </li>
            <li className="header__nav-item">
              <a href="/" className="header__nav-item-link">
                contact
              </a>
            </li>
            <li className="header__nav-item">
              <a href="/" className="header__nav-item-link">
                team
              </a>
            </li>
          </ol>
        </nav>

        <div className="header__cta">
          <a href="/" className="header__cta-btn header__cta-btn--secondary">
            post a job
          </a>
          <a href="/" className="header__cta-btn header__cta-btn--primary">
            log in
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;
