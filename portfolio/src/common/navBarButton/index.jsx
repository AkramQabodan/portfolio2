import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";
const NavBarButton = ({ text, to, setOpened }) => {
  return (
    <NavLink
      className={`${styles.container} ${
        text === "_contact-me" && styles.contactMe
      }`}
      to={`/${to}`}
      onClick={() => setOpened(false)}
    >
      <li className={styles.item}>{text}</li>
    </NavLink>
  );
};
export default NavBarButton;
