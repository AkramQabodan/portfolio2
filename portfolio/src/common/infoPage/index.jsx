import styles from "./index.module.scss";
const InfoPage = () => {
  const text = {
    introduction: (
      <p>
        Recent iti graduate with solid background in web development.
        <br />
        <br />
        Over one year of self developing and creating projects on personal
        Github With skill of programming to deliver an immersive and engaging
        user experience through efficient website development, proactive feature
        optimization and relentless debugging.
        <br />
        <br />
        Seeking to become expert in the field, to broaden my knowledge and
        acquaintances.
      </p>
    ),
    skills: (
      <p>
        JavaScript and React.js are my strongest, and I'm developing and working
        to learn more.
        <br />
        <br />
        I've made few projects with pure JavaScript and few with react, you can
        check them in the projects sections.
        <br />
        <br /> Playing with animation and following up with the design is always
        fun to do with css, sass and bootStrap.
        <br />
        <br /> Giving care to semantic meaning when it comes to html with the
        proper tags.
        <br />
        <br /> Always making sure to use git and github to help trace my work.
      </p>
    ),
  };
  return (
    <div className={styles.container}>
      <header className={styles.pageName}>
        personal-info <div className={styles.exit}></div>
      </header>
      <main className={styles.main}>/*{text.skills} */</main>
    </div>
  );
};
export default InfoPage;
