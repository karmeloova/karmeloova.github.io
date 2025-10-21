import React from "react";
import styles from '../css/HeroSection.module.css';

export function HeroSection() {
    return (
        <div className={styles.HeroSection}>
            <div className={styles.NameText}>Olga Maruszyńska</div>
            <div className={styles.RoleText}>GAME DEVELOPER</div>
        </div>
    )
}