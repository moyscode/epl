import styles from "./teamBanner.module.css";
import { useNavigate } from "react-router-dom";
import { TeamBannerProps } from "../ProjectTypes.types";

export const TeamBanner = ({
  team,
  onBannerClick,
  showName,
}: TeamBannerProps) => {
  let navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/${team}`);
    onBannerClick();
  };

  return (
    <div
      className={`${styles.container} flex theme-light ${
        showName ? "" : styles["no-name"]
      }`}
      title={team}
      onClick={handleOnClick}
    >
      <div>
        <img
          src={require(`../logos/${team}.svg`)}
          alt="logo"
          className={`${styles.logo} ${showName ? "" : styles["only-logo"]}`}
        />
      </div>
      {showName ? team : ""}
    </div>
  );
};
