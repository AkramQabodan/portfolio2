import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";
const NavBarButton = ({ text }) => {
  return (
    <NavLink
      className={`${styles.container} ${
        text === "_contact-me" && styles.contactMe
      }`}
      to={`/${text}`}
    >
      <li className={styles.item}>{text}</li>
    </NavLink>
  );
};
export default NavBarButton;
