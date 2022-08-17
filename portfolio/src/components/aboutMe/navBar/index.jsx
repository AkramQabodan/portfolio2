import AboutMeNavButton from "../../../common/aboutmeNavButton";
import professionalIcon from "../../../assets/icons/professional-info-icon.svg";
import personalIcon from "../../../assets/icons/personal-info-icon.svg";
import hobbyIcon from "../../../assets/icons/hobbies-Icon.svg";
import styles from "./index.module.scss";

const AboutMeNav = () => {
  return (
    <nav className={styles.container}>
      <AboutMeNavButton to={"professional"} icon={professionalIcon} />
      <AboutMeNavButton to={"personal"} icon={personalIcon} />
      <AboutMeNavButton to={"hobby"} icon={hobbyIcon} />
    </nav>
  );
};
export default AboutMeNav;
