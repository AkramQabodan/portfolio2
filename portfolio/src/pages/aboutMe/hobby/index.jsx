import IntroComponentAnimation from "../../../common/animation/componentIntro/IntroComponentAnimation";
import SideMenu from "../../../common/sideMenu";

import styles from "./index.module.scss";
const Hobby = () => {
  const infoArr = [
    {
      folderName: "interests",
      items: ["GYM", "football", "padel tennis", "video games"],
    },
  ];
  return (
    <IntroComponentAnimation isVisible={true}>
      <div className={styles.container}>
        <SideMenu infoArr={infoArr} title={"Interest"} />
      </div>
    </IntroComponentAnimation>
  );
};
export default Hobby;
