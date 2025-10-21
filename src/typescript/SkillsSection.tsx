import titleStyles from "../css/AboutSection.module.css";
import { Skill } from "./Skill";
import skillsData from "../data/skillsData.json";

export function SkillsSection() {
  return (
    <section id="skills" className={titleStyles.Container}>
      <div className={titleStyles.AboutSection}>
        <div className={titleStyles.SectionTitle}>✦ Skills</div>
        <hr className={titleStyles.Line} />

        {skillsData.map((skill) => (
          <Skill
            key={skill.id}
            name={skill.name}
            icon={skill.icon}
            level={skill.level}
            additional={skill.additional}
          />
        ))}
      </div>
    </section>
  );
}
