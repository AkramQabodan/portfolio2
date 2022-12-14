import IntroComponentAnimation from "../../common/animation/componentIntro/IntroComponentAnimation";
import CodeSnippetContainer from "../../components/hello/codesnippetContainer";
import IntroInfo from "../../components/hello/IntroInfo";
import styles from "./index.module.scss";

const HelloPage = () => {
  return (
    <IntroComponentAnimation isVisible={true}>
      <div className={styles.container}>
        <IntroInfo />
        <CodeSnippetContainer />
      </div>
    </IntroComponentAnimation>
  );
};
export default HelloPage;
