import { Outlet } from "react-router";
import IntroComponentAnimation from "../../common/animation/componentIntro/IntroComponentAnimation";
import AboutMeNav from "../../components/aboutMe/navBar";
import styles from "./index.module.scss";

const AboutMePage = () => {
  return (
    <IntroComponentAnimation isVisible={true}>
      <div className={styles.container}>
        <AboutMeNav />
        <Outlet />
      </div>
    </IntroComponentAnimation>
  );
};
export default AboutMePage;
