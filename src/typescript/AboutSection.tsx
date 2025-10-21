import styles from '../css/AboutSection.module.css';

export function AboutSection() {
    return (
        <section id = "about" className={styles.Container}>
            <div className={styles.AboutSection}>
                <div className={styles.SectionTitle}>✦ About me</div>
                <hr className={styles.Line}/>
                <div className={styles.SectionText}>I’m an aspiring game developer passionate about creating engaging and meaningful player experiences. My goal is to grow professionally and gain hands-on experience in the industry. I’m looking for a place where I can contribute to interesting projects, learn from others, and be part of a supportive, close-knit team.
                                                    <br/><br/>I value creativity, collaboration, and the joy of building games together — step by step, learning and improving along the way.</div>
            </div>
        </section>
    )
}