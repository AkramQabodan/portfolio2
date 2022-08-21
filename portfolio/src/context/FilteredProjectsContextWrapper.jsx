import { createContext, useState } from "react";
import countries from "../assets/imgs/countries.png";
import rockPaperScissors from "../assets/imgs/rock,paper and scissors.png";
import memorycard from "../assets/imgs/memory card.png";
import todoList from "../assets/imgs/todo-list.png";
import promodoro from "../assets/imgs/promodoro.png";
import clock from "../assets/imgs/clock.png";
import kutub from "../assets/imgs/kutub.png";
import reactIcon from "../assets/icons/reactBG.svg";
import cssIcon from "../assets/icons/cssIcon.svg";
import javascriptIcon from "../assets/icons/jsIcon.png";
export const FilteredProjectsContext = createContext();

const FilteredProjectsContextWrapper = ({ children }) => {
  const projects = [
    {
      name: "kutub",
      text: `a website made with react.js about books and manga. including a lot of new featues.`,
      img: kutub,
      link: "https://kutub-1d881.firebaseapp.com/",
      icon: reactIcon,
      tech: "react.js",
    },
    {
      name: "countries-Project",
      text: `a website made with react.js about all countries with the ability to search and filter.`,
      img: countries,
      link: "https://country-dca6b.web.app/",
      icon: reactIcon,
      tech: "react.js",
    },
    {
      name: "rock-paper-and-scissor",
      text: `a website made with react.js about the famous game rock, paper and scissors.`,
      img: rockPaperScissors,
      link: "https://rock-paper-and-scissors-f399c.web.app/",
      icon: reactIcon,
      tech: "react.js",
    },
    {
      name: "memory-card",
      text: `a website made with pure javascript about memory card game.`,
      img: memorycard,
      link: "https://akramqabodan.github.io/card-game/",
      icon: javascriptIcon,
      tech: "javascript",
    },
    {
      name: "drag-drop-to-do-list",
      text: `a website made with pure javascript about todo-list with drag-drop and storage feature.`,
      img: todoList,
      link: "https://akramqabodan.github.io/Drag-drop-to-do-list/",
      icon: javascriptIcon,
      tech: "javascript",
    },
    {
      name: "promodoro",
      text: `a website made with pure javascript about promodoro clock.`,
      img: promodoro,
      link: "https://akramqabodan.github.io/Promodoro/",
      icon: javascriptIcon,
      tech: "javascript",
    },
    {
      name: "clockAnimation",
      text: `a website made with html and css about a clock moving using simple animation.`,
      img: clock,
      link: "https://akramqabodan.github.io/clockAnimation/",
      icon: cssIcon,
      tech: "css",
    },
  ];
  const [filteredTech, setFilteredTech] = useState([
    "react.js",
    "javascript",
    "css",
  ]);
  const [checkedReact, setCheckedReact] = useState(true);
  const [checkedJavaScript, setCheckedcheckedJavaScript] = useState(true);
  const [checkedCss, setCheckedCss] = useState(true);
  const toggleTech = (text) => {
    if (text === "react.js") {
      setCheckedReact((prev) => !prev);
    }
    if (text === "javascript") {
      setCheckedcheckedJavaScript((prev) => !prev);
    }
    if (text === "css") {
      setCheckedCss((prev) => !prev);
    }
    setFilteredTech((prev) => {
      if (prev.includes(text)) {
        return prev.filter((item) => item !== text);
      } else {
        return [...prev, text];
      }
    });
  };

  return (
    <FilteredProjectsContext.Provider
      value={{
        projects,
        filteredTech,
        toggleTech,
        checkedReact,
        checkedJavaScript,
        checkedCss,
      }}
    >
      {children}
    </FilteredProjectsContext.Provider>
  );
};

export default FilteredProjectsContextWrapper;
