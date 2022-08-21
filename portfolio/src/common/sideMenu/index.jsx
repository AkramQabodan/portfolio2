import AboutMeContactUs from "../aboutMeContactUs";
import AboutMeInfoSection from "../aboutMeInfoSection";
import IntroComponentAnimation from "../animation/componentIntro/IntroComponentAnimation";
import styles from "./index.module.scss";
const SideMenu = ({ infoArr, title }) => {
  return (
    <div className={styles.container}>
      <AboutMeInfoSection title={title} infoArr={infoArr} />
      <AboutMeContactUs />
    </div>
  );
};
export default SideMenu;
