import { useContext } from "react";
import styles from "./index.module.scss";
import { InfoContext } from "../../../../../context/InfoContextWrapper";

const Info = ({ text, lowMargin }) => {
  const { setSelectedInfo } = useContext(InfoContext);
  const onClickHandler = () => {
    setSelectedInfo(text);
  };
  return (
    <div
      style={{ marginLeft: `${lowMargin ? "13.11px" : "37.6px"}` }}
      className={styles.container}
      onClick={onClickHandler}
    >
      <div className={styles.icon}></div>
      <span className={styles.text}>{text}</span>
    </div>
  );
};
export default Info;
