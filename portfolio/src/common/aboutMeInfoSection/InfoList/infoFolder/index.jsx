import { useState } from "react";
import styles from "./index.module.scss";
import Info from "./info";
const InfoFolder = ({ text, items, bg }) => {
  const [opened, setOpened] = useState(false);
  const onClickHandler = () => {
    setOpened((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div className={styles.folder}>
        <div
          onClick={onClickHandler}
          style={{ transform: `${opened ? "rotate(90deg)" : "rotate(0)"}` }}
          className={styles.arrow}
        ></div>
        <div
          style={{
            backgroundImage: `url(${bg})`,
          }}
          className={styles.folder}
        ></div>
        <span
          style={{ color: `${opened ? "#fff" : "#607b96"}` }}
          className={styles.text}
        >
          {text}
        </span>
      </div>
      {opened &&
        items.map((item, index) => {
          return <Info key={index} text={item} />;
        })}
    </div>
  );
};
export default InfoFolder;
