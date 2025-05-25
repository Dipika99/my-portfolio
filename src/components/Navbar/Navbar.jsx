import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { getImageUrl } from "../../utils";
import styles from './Navbar.module.scss';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`navbar navbar-expand-lg bg-dark1 ${styles.navbarCustom}`}>
    <div className="container">
      <a className={`navbar-brand text-white ${styles.brand}`} href="/">
        Dipika Valvi
      </a>
      <button
        className={`navbar-toggler ${styles.menuToggle}`}
        type="button"
        aria-expanded={menuOpen ? "true" : "false"}
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <img
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          className={styles.menuIcon}
        />
      </button>
      <div
        className={`collapse navbar-collapse ${
          menuOpen ? "show" : ""
        } ${styles.navCollapse}`}
      >
        <ul className={`navbar-nav ms-auto ${styles.navList}`}>
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/experience", label: "Work Experience" },
            { to: "/education", label: "Education" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label }) => (
            <li className="nav-item" key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? `nav-link ${styles.navLink} ${styles.activeLink}`
                    : `nav-link ${styles.navLink}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>

  );
};