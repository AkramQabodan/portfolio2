import { useContext } from "react";
import styles from "./index.module.scss";
import { InfoContext } from "../../context/InfoContextWrapper";
const InfoPage = () => {
  const { filteredText } = useContext(InfoContext);

  return (
    <div className={styles.container}>
      <header className={styles.pageName}>
        personal-info <div className={styles.exit}></div>
      </header>
      <main className={styles.main}>/* {filteredText} */</main>
    </div>
  );
};
export default InfoPage;
