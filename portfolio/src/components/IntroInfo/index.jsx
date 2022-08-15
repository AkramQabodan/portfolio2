import styles from "./index.module.scss";

const IntroInfo = () => {
  return (
    <div className={styles.container}>
      <span className={styles.hi}>Hi all. I am</span>
      <h1 className={styles.name}>Akram Qabodan</h1>
      <span className={styles.job}>&gt; Front-end developer</span>
      <span className={styles.comment}>
        // you can also see it on my Github page
      </span>
      <p className={styles.gitHub}>
        <span className={styles.blue}>const</span>{" "}
        <span className={styles.green}>githubLink</span> =
        <span className={styles.orange}>
          “github.com/AkramQabodan/portfolio2.git”
        </span>
      </p>
    </div>
  );
};
export default IntroInfo;
