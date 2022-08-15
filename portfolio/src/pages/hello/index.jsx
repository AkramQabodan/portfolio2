import CodeSnippetContainer from "../../components/codesnippetContainer";

import IntroInfo from "../../components/IntroInfo";
import styles from "./index.module.scss";

const HelloPage = () => {
  return (
    <div className={styles.container}>
      <IntroInfo />
      <CodeSnippetContainer />
    </div>
  );
};
export default HelloPage;
