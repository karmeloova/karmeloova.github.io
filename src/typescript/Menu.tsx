import React, { useState, useEffect } from 'react';
import styles from '../css/Menu.module.css';
import { Menu, X } from "lucide-react";

export function MenuFunc() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // 👇 zamykanie menu przy powiększeniu okna
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <div>
      <div className={styles.Line}> </div>
      
      {/* DESKTOP MENU */}
      <nav className={styles.Menu}>
        <li><a href="#about" className={styles.MenuButton}>About me</a></li>
        <li><a href="#projects" className={styles.MenuButton}>Projects</a></li>
        <li><a href="#skills" className={styles.MenuButton}>Skills</a></li>
        <li><a href="#experience" className={styles.MenuButton}>Experience</a></li>
        <li><a href="#contact" className={styles.MenuButton}>Contact</a></li>
      </nav>

      {/* MOBILE ICONS */}
      <div className={styles.MenuButtons}>
        <Menu
          size={50}
          className={`${styles.MobileMenuIcon} ${isMenuOpen ? styles.NotVisible : styles.Visible}`}
          onClick={toggleMenu}
        />
        <X
          size={50}
          className={`${styles.MobileMenuIcon} ${isMenuOpen ? styles.Visible : styles.NotVisible}`}
          onClick={toggleMenu}
        />
      </div>

      {/* MOBILE MENU */}
      <div className={`${styles.MobileMenu} ${isMenuOpen ? styles.Visible : ''}`}>
        <a href="#about" className={styles.MenuButtonMobile} onClick={closeMenu}>About me</a>
        <a href="#projects" className={styles.MenuButtonMobile} onClick={closeMenu}>Projects</a>
        <a href="#skills" className={styles.MenuButtonMobile} onClick={closeMenu}>Skills</a>
        <a href="#experience" className={styles.MenuButtonMobile} onClick={closeMenu}>Experience</a>
        <a href="#contact" className={styles.MenuButtonMobile} onClick={closeMenu}>Contact</a>
      </div>
    </div>
  );
}
