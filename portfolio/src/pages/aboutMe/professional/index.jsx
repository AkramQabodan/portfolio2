import styles from "./index.module.scss";
import IntroComponentAnimation from "../../../common/animation/componentIntro/IntroComponentAnimation";
import SideMenu from "../../../common/sideMenu";
import InfoPage from "../../../common/infoPage";
const Professional = () => {
  const infoArr = [
    {
      folderName: "skills",
      items: [
        "react.js",
        "javaScript",
        "css",
        "sass",
        "html",
        "git / github",
        "unit-testing",
        "redux / context",
        "bootStrap",
        "typeScript",
        "react.native",
        "angular",
      ],
    },
    {
      folderName: "experiences",
      items: ["english-teacher", "customer-service-agent"],
    },
    { folderName: "languages", items: ["english", "arabic"] },
    { folderName: "accomplishments", items: ["Record-breaker-in-Vodafone-UK"] },
    "introduction",
  ];
  return (
    <IntroComponentAnimation isVisible={true}>
      <div className={styles.container}>
        <SideMenu infoArr={infoArr} title={"professional"} />
        <InfoPage />
      </div>
    </IntroComponentAnimation>
  );
};
export default Professional;
