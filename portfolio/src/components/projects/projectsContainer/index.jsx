import styles from "./index.module.scss";
import Project from "./project";
import { useContext } from "react";
import { FilteredProjectsContext } from "../../../context/FilteredProjectsContextWrapper";
const ProjectsContainer = () => {
  const { projects, filteredTech } = useContext(FilteredProjectsContext);
  let count = 0;

  return (
    <div className={styles.container}>
      {projects?.map((item, index) => {
        if (filteredTech?.includes(item.tech)) {
          count++;
        }
        return filteredTech?.includes(item.tech) ? (
          <Project
            name={item.name}
            text={item.text}
            img={item.img}
            link={item.link}
            number={count}
            key={index}
            icon={item.icon}
          />
        ) : null;
      })}
    </div>
  );
};
export default ProjectsContainer;
