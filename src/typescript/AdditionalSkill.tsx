import styles from "../css/AdditionalSkill.module.css";

interface AdditionalSkillProps {
  name: string;
  level: number;
}

export function AdditionalSkill({ name, level }: AdditionalSkillProps) {
  const totalCircles = 5;
  const filled = Array(level).fill(styles.FilledCircle);
  const empty = Array(totalCircles - level).fill(styles.EmptyCircle);

  return (
    <div className={styles.AdditionalSkillContainer}>
      <div className={styles.SkillInfo}>
        <hr className={styles.Line} />
        <p className={styles.AdditionalSkillLabel}>{name}</p>
      </div>
      <div className={styles.AdditionalSkillLevel}>
        {[...filled, ...empty].map((cls, i) => (
          <div key={i} className={`${styles.Circle} ${cls}`} />
        ))}
      </div>
    </div>
  );
}
