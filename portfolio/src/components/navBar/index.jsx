import { useState } from "react";
import NavBarButton from "../../common/navBarButton";
import styles from "./index.module.scss";

const NavBar = () => {
  const [opened, setOpened] = useState(true);
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
          <ul className={styles.links2}>
            <NavBarButton setOpened={setOpened} to={"_hello"} text={"_hello"} />
            <NavBarButton
              setOpened={setOpened}
              to={"_about-me/professional"}
              text={"_about-me"}
            />
            <NavBarButton
              setOpened={setOpened}
              to={"_projects"}
              text={"_projects"}
            />
            <NavBarButton
              setOpened={setOpened}
              to={"_contact-me"}
              text={"_contact-me"}
            />
          </ul>
        )}
      </nav>
    </>
  );
};
export default NavBar;
