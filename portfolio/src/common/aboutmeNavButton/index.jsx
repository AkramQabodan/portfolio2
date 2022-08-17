import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
const AboutMeNavButton = ({ icon, to }) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`${to}`, { replace: true });
  };
  return (
    <div
      onClick={onClickHandler}
      style={{ backgroundImage: `url(${icon})` }}
      className={styles.container}
    ></div>
  );
};
export default AboutMeNavButton;
