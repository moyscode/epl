import styles from "./teamBanner.module.css";
import { useNavigate } from "react-router-dom";
import { TeamBannerProps } from "../ProjectTypes.types";

export const TeamBanner = ({ team, onBannerClick }: TeamBannerProps) => {
  let navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/${team}`);
    onBannerClick();
  };
  const showNames = true;

  return (
    <div
      className={`${styles.container} flex theme-light`}
      onClick={handleOnClick}
    >
      <div>
        <img
          src={require(`../logos/${team}.svg`)}
          alt="logo"
          className={styles.logo}
        />
      </div>
      {showNames ? team : ""}
    </div>
  );
};
