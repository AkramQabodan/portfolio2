import { useState } from "react";
import styles from "./index.module.scss";
import SkillsFilterMenu from "./skillsFilterList";
const SideFilterMenu = () => {
  const [opened, setOpened] = useState(true);
  const titleOnClickHandler = () => {
    setOpened((previousValue) => !previousValue);
  };
  return (
    <div className={styles.container}>
      <div onClick={titleOnClickHandler} className={styles.title}>
        <div
          style={{ transform: opened ? "rotate(0deg)" : "rotate(-90deg)" }}
          className={styles.icon}
        ></div>
        <h3 className={styles.info}>projects</h3>
      </div>
      {opened && <SkillsFilterMenu />}
    </div>
  );
};
export default SideFilterMenu;
