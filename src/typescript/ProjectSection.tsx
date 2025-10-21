import { useState } from "react";
import ReactDOM from "react-dom";
import titleStyles from "../css/AboutSection.module.css";
import styles from "../css/ProjectsSection.module.css";
import projectsData from "../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import { ProjectWindow } from "./ProjectWindow";

export function ProjectSection() {
  const [openProjectIndex, setOpenProjectIndex] = useState<number | null>(null);

  // Funkcje do nawigacji między projektami
  const handleNextProject = () => {
    setOpenProjectIndex((prev) =>
      prev === null
        ? 0
        : prev === projectsData.length - 1
        ? 0
        : prev + 1
    );
  };

  const handlePreviousProject = () => {
    setOpenProjectIndex((prev) =>
      prev === null
        ? 0
        : prev === 0
        ? projectsData.length - 1
        : prev - 1
    );
  };

  // Zamknięcie modala
  const handleClose = () => {
    setOpenProjectIndex(null);
  };

  return (
    <>
      <section id="projects" className={titleStyles.Container}>
        <div className={titleStyles.AboutSection}>
          <div className={titleStyles.SectionTitle}>✦ Projects</div>
          <hr className={titleStyles.Line} />

          <div className={styles.ProjectsContainer}>
            {projectsData.map((p, i) => (
              <ProjectCard
                key={p.id}
                image={p.images}
                title={p.title}
                description={p.description}
                tags={p.tags}
                // kliknięcie otwiera okienko
                onClick={() => setOpenProjectIndex(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- tu tworzymy portal --- */}
      {openProjectIndex !== null &&
        ReactDOM.createPortal(
          <ProjectWindow
            projectIndex={openProjectIndex}
            projects={projectsData}
            onClose={handleClose}
            onNext={handleNextProject}
            onPrev={handlePreviousProject}
          />,
          document.body
        )}
    </>
  );
}
