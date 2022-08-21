import styles from "./index.module.scss";
import ProjectCard from "./projectCard";
import ProjectTitle from "./projectTitle";
const Project = ({ name, text, img, link, number, icon }) => {
  return (
    <div className={styles.container}>
      <ProjectTitle name={name} number={number} />
      <ProjectCard text={text} img={img} link={link} icon={icon} />
    </div>
  );
};
export default Project;
