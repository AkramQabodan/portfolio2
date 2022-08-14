import styles from "./index.module.scss";

const FooterIcon = ({ icon, link }) => {
  return (
    <div
      style={{ backgroundImage: `url(${icon})` }}
      className={styles.container}
    >
      <a href={link} target="_blank" className={styles.link}>
        {" "}
      </a>
    </div>
  );
};
export default FooterIcon;
