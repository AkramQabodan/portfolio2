import IntroComponentAnimation from "../../common/animation/componentIntro/IntroComponentAnimation";
import ProjectsContainer from "../../components/projects/projectsContainer";
import SideFilterMenu from "../../components/projects/sideFilterMenu";
import styles from "./index.module.scss";

const ProjectsPage = () => {
  return (
    <IntroComponentAnimation isVisible={true}>
      <div className={styles.container}>
        <SideFilterMenu />
        <ProjectsContainer />
      </div>
    </IntroComponentAnimation>
  );
};
export default ProjectsPage;
