import styles from "./index.module.scss";

const Info = ({ text, lowMargin, bg }) => {
  return (
    <div
      style={{ marginLeft: `${lowMargin ? "13.11px" : "37.6px"}` }}
      className={styles.container}
    >
      <div className={styles.icon}></div>
      <span className={styles.text}>{text}</span>
    </div>
  );
};
export default Info;
