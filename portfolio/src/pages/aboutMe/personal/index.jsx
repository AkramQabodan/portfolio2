import styles from "./index.module.scss";
import IntroComponentAnimation from "../../../common/animation/componentIntro/IntroComponentAnimation";
import SideMenu from "../../../common/sideMenu";
import InfoPage from "../../../common/infoPage";
const Personal = () => {
  const infoArr = [
    { folderName: "education", items: ["high-school", "university"] },
    {
      folderName: "softSkills",
      items: ["communative", "team-player", "multi-tasker"],
    },
    "12.06.1996",
    "Egypt, Alexandria",
  ];
  return (
    <IntroComponentAnimation isVisible={true}>
      <div className={styles.container}>
        <SideMenu infoArr={infoArr} />
        <InfoPage />
      </div>
    </IntroComponentAnimation>
  );
};
export default Personal;
