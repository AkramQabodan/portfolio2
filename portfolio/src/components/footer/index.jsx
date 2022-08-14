import FooterIcon from "../../common/footerIcon";
import styles from "./index.module.scss";
import LinkedIn from "../../assets/icons/linkedin-fill.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram-fill.svg";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <span className={styles.findMe}>find me in:</span>
      <FooterIcon
        icon={LinkedIn}
        link="https://www.linkedin.com/in/akram-qabodan-0772701b7/"
      />
      <FooterIcon
        icon={facebook}
        link="https://www.facebook.com/akram.qabodan/"
      />
      <FooterIcon
        icon={instagram}
        link="https://www.instagram.com/akram_khaled_ali/"
      />
      <a
        className={styles.gitHub}
        href="https://github.com/AkramQabodan"
        target="_blank"
      >
        @AkramQabodan <div className={styles.icon}></div>
      </a>
    </footer>
  );
};
export default Footer;
