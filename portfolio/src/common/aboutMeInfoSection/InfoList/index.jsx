import styles from "./index.module.scss";
import InfoFolder from "./infoFolder";
import Info from "./infoFolder/info";
import folder1 from "../../../assets/icons/folder1.svg";
import folder2 from "../../../assets/icons/folder2.svg";
import folder3 from "../../../assets/icons/folder3.svg";
const InfoList = ({ infoArr }) => {
  const folders = [folder1, folder2, folder3];
  return (
    <div className={styles.container}>
      {infoArr
        ? infoArr.map((item, index) => {
            if (typeof item === "object") {
              return (
                <InfoFolder
                  key={index}
                  bg={folders[index] ? folders[index] : folders[0]}
                  text={item.folderName}
                  items={item.items}
                />
              );
            } else {
              return <Info key={index} text={item} lowMargin={true} />;
            }
          })
        : null}
    </div>
  );
};
export default InfoList;
