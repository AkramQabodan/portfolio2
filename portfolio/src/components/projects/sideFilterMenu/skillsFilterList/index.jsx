import FilterItem from "./FilterItem";
import styles from "./index.module.scss";
import react from "../../../../assets/icons/react.svg";
import css from "../../../../assets/icons/css.svg";
import javaScript from "../../../../assets/icons/javascript.png";
import { useContext } from "react";
import { FilteredProjectsContext } from "../../../../context/FilteredProjectsContextWrapper";
const SkillsFilterMenu = () => {
  const { toggleTech } = useContext(FilteredProjectsContext);
  const tech = [
    { text: "css", bg: css },
    { text: "javascript", bg: javaScript },
    { text: "react.js", bg: react },
  ];
  const onClickHandler = (text) => {
    toggleTech(text);
  };
  return (
    <div className={styles.container}>
      {tech.map((item, index) => (
        <FilterItem
          onClick={() => onClickHandler(item.text)}
          key={index}
          bg={item.bg}
          text={item.text}
        />
      ))}
    </div>
  );
};
export default SkillsFilterMenu;
