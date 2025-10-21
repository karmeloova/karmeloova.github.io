import styles from "../css/Skill.module.css";
import { AdditionalSkill } from "./AdditionalSkill";

interface AdditionalSkillType {
  name: string;
  level: number;
}

interface SkillProps {
  name: string;
  icon: string;
  level: number;
  additional: AdditionalSkillType[];
}

export function Skill({ name, icon, level, additional }: SkillProps) {
  const totalCircles = 5;
  const filled = Array(level).fill(styles.FilledCircle);
  const empty = Array(totalCircles - level).fill(styles.EmptyCircle);

  return (
    <div className={styles.SkillContainer}>
      <div className={styles.MainSkill}>
        <div className={styles.SkillInfo}>
          <div className={styles.IconBublle}>
            <img className={styles.SkillIcon} src={icon} alt={name} />
          </div>
          <p className={styles.SkillLabel}>{name}</p>
        </div>

        <div className={styles.SkillLevel}>
          {[...filled, ...empty].map((cls, i) => (
            <div key={i} className={`${styles.Circle} ${cls}`} />
          ))}
        </div>
      </div>

      {additional.map((a, i) => (
        <AdditionalSkill key={i} name={a.name} level={a.level} />
      ))}
    </div>
  );
}
