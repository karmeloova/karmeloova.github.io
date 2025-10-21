import { useState, useEffect } from "react";
import styles from "../css/ProjectWindow.module.css";
import { Tag } from "./Tag";
import { Play, X } from "lucide-react";

interface ProjectWindowProps {
  projectIndex: number;
  projects: any[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function ProjectWindow({ projectIndex, projects, onClose, onNext, onPrev }: ProjectWindowProps) {
  const project = projects[projectIndex];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = project.images || [];

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const previousImage = () => setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden"; // blokada scrolla
    return () => {
      document.body.style.overflow = originalStyle; // przywrócenie scrolla
    };
  }, []);

  return (
    <>
      <div className={styles.OverlayBackground} onClick={onClose}></div>

      <div className={styles.ProjectWindowContainer}>
        <X className={styles.CloseButton} size={40} onClick={onClose} />

        <p className={styles.ProjectTitle}>{project.title}</p>

        <div className={styles.ImagesContainer}>
          <Play size={50} style={{ transform: "scaleX(-1)" }} className={styles.ImageButton} onClick={previousImage} />
          <img
            src={images[currentImageIndex]}
            alt={`Screenshot ${currentImageIndex + 1}`}
            className={styles.ProjectImage}
          />
          <Play size={50} className={styles.ImageButton} onClick={nextImage} />
        </div>

        <div className={styles.TagsContainer}>
          {project.tags.map((tag: string, index: number) => (
            <Tag key={index} label={tag} />
          ))}
        </div>

        <div className={styles.DescriptionContainer}>
          <p dangerouslySetInnerHTML={{ __html: project.longdesc }} className={styles.DescriptionText}></p>
        </div>

        <div className={styles.AnotherProjectsContainer}>
          <Play size={50} style={{ transform: "scaleX(-1)" }} className={styles.ImageButton} onClick={onPrev} />
          <Play size={50} className={styles.ImageButton} onClick={onNext} />
        </div>
      </div>
    </>
  );
}
