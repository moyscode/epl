import styles from "./teamBanner.module.css";
import { useNavigate } from "react-router-dom";
import { TeamBannerProps } from "../ProjectTypes.types";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

export const TeamBanner = ({
  team,
  onBannerClick,
  showName,
}: TeamBannerProps) => {
  const colorMode = useSelector(
    (state: RootState) => state.colorModeToggler.value
  );

  let navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/${team}`);
    onBannerClick();
  };

  return (
    <div
      className={`${styles.container} flex ${
        colorMode === "dark" ? "theme-dark" : "theme-light"
      } ${showName ? "" : styles["no-name"]}`}
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
      <div className={styles.name}> {showName ? team : ""}</div>
    </div>
  );
};
