import styles from "./index.module.scss";

const ProjectCard = ({ text, img, link, icon }) => {
  return (
    <div className={styles.container}>
      <figure className={styles.figure}>
        <img className={styles.img} src={img} alt="project" />
        <div
          style={{ backgroundImage: `url(${icon})` }}
          className={styles.techIcon}
        ></div>
      </figure>
      <section className={styles.details}>
        <p className={styles.text}>{text}</p>
        <a href={link} target="_blank" className={styles.viewMore}>
          view-project
        </a>
      </section>
    </div>
  );
};
export default ProjectCard;
