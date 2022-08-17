import { useState } from "react";
import styles from "./index.module.scss";
import InfoList from "./InfoList";
const AboutMeInfoSection = ({ title, infoArr }) => {
  const [opened, setOpened] = useState(false);
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
        <h3 className={styles.info}>{title || "Personal"} Info</h3>
      </div>
      {opened && <InfoList infoArr={infoArr} />}
    </div>
  );
};
export default AboutMeInfoSection;
