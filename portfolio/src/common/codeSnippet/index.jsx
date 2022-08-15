import styles from "./index.module.scss";

const CodeSnippet = ({ code }) => {
  return <div className={styles.container}>{code}</div>;
};
export default CodeSnippet;
