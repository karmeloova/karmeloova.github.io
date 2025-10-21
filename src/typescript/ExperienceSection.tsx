import titleStyles from '../css/AboutSection.module.css';
import styles from '../css/ExperienceSection.module.css';
import { Experience } from './Experience';
import experienceData from '../data/experienceData.json';

export function ExperienceSection() {
  return (
    <section id="experience" className={titleStyles.Container}>
      <div className={titleStyles.AboutSection}>
        <div className={titleStyles.SectionTitle}>✦ Experience</div>
        <hr className={titleStyles.Line} />

        <div className={styles.ExperienceContainer}>
          {experienceData.map((exp) => (
            <Experience
              key={exp.id}
              years={exp.years}
              position={exp.position}
              company={exp.company}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
