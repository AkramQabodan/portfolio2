import { useState } from "react";
import styles from "./index.module.scss";

const AboutMeContactUs = () => {
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
        <h3 className={styles.info}>Contact Me</h3>
      </div>
      {opened ? (
        <>
          <div className={styles.contactInfo}>
            <div className={styles.msgIcon}></div>
            <span className={styles.textContact}>akramqabodan22@gmail.com</span>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.phoneIcon}></div>
            <span className={styles.textContact}>+20 01110693061</span>
          </div>
        </>
      ) : null}
    </div>
  );
};
export default AboutMeContactUs;
