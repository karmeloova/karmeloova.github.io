import styles from '../css/AboutSection.module.css';

export function AboutSection() {
    return (
        <section id = "about" className={styles.Container}>
            <div className={styles.AboutSection}>
                <div className={styles.SectionTitle}>✦ About me</div>
                <hr className={styles.Line}/>
                <div className={styles.SectionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>
            </div>
        </section>
    )
}