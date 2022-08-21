import styles from "./index.module.scss";

import { useContext, useEffect, useState } from "react";
import { FilteredProjectsContext } from "../../../../../context/FilteredProjectsContextWrapper";
const FilterItem = ({ text, bg, onClick }) => {
  const [checked, setChecked] = useState(true);
  const { checkedReact, checkedJavaScript, checkedCss } = useContext(
    FilteredProjectsContext
  );

  useEffect(() => {
    if (text === "react.js") setChecked(checkedReact);
    if (text === "javascript") {
      setChecked(checkedJavaScript);
    }
    if (text === "css") {
      setChecked(checkedCss);
    }
  }, [checkedReact, checkedJavaScript, checkedCss]);

  const onClickHandler = () => {
    onClick();
  };
  return (
    <div className={styles.container}>
      <input
        onClick={onClickHandler}
        type="checkbox"
        className={`${styles.checkBox} ${checked && styles.checkBoxChecked}`}
      />
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className={`${checked ? styles.iconActive : ""} ${styles.icon}`}
      ></div>
      <span className={`${checked ? styles.text : ""}`}>{text}</span>
    </div>
  );
};
export default FilterItem;
