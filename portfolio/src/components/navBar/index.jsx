import NavBarButton from "../../common/navBarButton";
import styles from "./index.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <span className={styles.name}>akram-khaled-ali</span>
      <ul className={styles.links}>
        <NavBarButton to={"_hello"} text={"_hello"} />
        <NavBarButton to={"_about-me/professional"} text={"_about-me"} />
        <NavBarButton to={"_projects"} text={"_projects"} />
        <NavBarButton to={"_contact-me"} text={"_contact-me"} />
      </ul>
    </nav>
  );
};
export default NavBar;
