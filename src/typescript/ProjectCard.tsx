import styles from '../css/ProjectCard.module.css';
import { Tag } from './Tag';

interface ProjectCardProps {
  image: string[];
  title: string;
  description: string;
  tags: string[];
  onClick: () => void;
}

export function ProjectCard({ image, title, description, tags, onClick }: ProjectCardProps) {
  return (
    <button className={styles.ProjectCard} onClick={onClick}>
      <img src={image[0]} className={styles.projectImage} alt={title} />
      <div className={styles.Project}>
        <div className={styles.Title}>{title}</div>
        <div className={styles.TagsContainer}>
          {tags.map((tag, i) => (
            <Tag key={i} label={tag} />
          ))}
        </div>
        <div className={styles.ProjectDescription}>{description}</div>
      </div>
    </button>
  );
}
