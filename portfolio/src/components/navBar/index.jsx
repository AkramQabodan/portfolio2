import { useState } from "react";
import NavBarButton from "../../common/navBarButton";
import styles from "./index.module.scss";

const NavBar = () => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <nav
        className={`${styles.container} ${opened && styles.containerOpened}`}
      >
        <span className={styles.name}>
          akram-khaled-ali{" "}
          <div
            onClick={() => {
              setOpened((previousValue) => !previousValue);
            }}
            className={`${styles.expand} ${opened && styles.opened}`}
          ></div>
        </span>

        <ul className={styles.links}>
          <NavBarButton to={"_hello"} text={"_hello"} />
          <NavBarButton to={"_about-me/professional"} text={"_about-me"} />
          <NavBarButton to={"_projects"} text={"_projects"} />
          <NavBarButton to={"_contact-me"} text={"_contact-me"} />
        </ul>

        {opened && (
          <ul onClick={() => setOpened(false)} className={styles.links2}>
            <NavBarButton to={"_hello"} text={"_hello"} />
            <NavBarButton to={"_about-me/professional"} text={"_about-me"} />
            <NavBarButton to={"_projects"} text={"_projects"} />
            <NavBarButton to={"_contact-me"} text={"_contact-me"} />
          </ul>
        )}
      </nav>
    </>
  );
};
export default NavBar;
