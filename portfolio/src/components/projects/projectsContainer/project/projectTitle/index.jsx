import styles from "./index.module.scss";
const ProjectTitle = ({ number, name }) => {
  return (
    <p className={styles.project}>
      Project {number} <span className={styles.name}>// _{name}</span>
    </p>
  );
};
export default ProjectTitle;
