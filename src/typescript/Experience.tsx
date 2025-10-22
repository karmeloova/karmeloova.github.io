import styles from "../css/Experience.module.css";

interface ExperienceProps {
  years: string;
  position: string;
  company: string;
  description: string;
}

export function Experience({ years, position, company, description }: ExperienceProps) {
  return (
    <div className={styles.ExperienceContainer}>
      <div className={styles.VerticalLine}>
        <div className={styles.Circle}></div>
      </div>

      <div className={styles.ExperienceInfo}>
        <p className={styles.Years}>{years}</p>
        <p className={styles.Position}>
          {position}
        </p>
        <p className={styles.PositionCompany}>
          {company}
        </p>
        <p className={styles.Description}>{description}</p>
      </div>
    </div>
  );
}
