import NavBarButton from "../../common/navBarButton";
import styles from "./index.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <span className={styles.name}>akram-khaled-ali</span>
      <ul className={styles.links}>
        <NavBarButton text={"_hello"} />
        <NavBarButton text={"_about-me"} />
        <NavBarButton text={"_projects"} />
        <NavBarButton text={"_contact-me"} />
      </ul>
    </nav>
  );
};
export default NavBar;
