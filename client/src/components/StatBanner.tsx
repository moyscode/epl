import styles from "./statBanner.module.css";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { StatBannerProps } from "../ProjectTypes.types";

export const StatBanner = ({
  category,
  teamValue,
  recordValue,
  recordTeam,
  season,
}: StatBannerProps) => {
  const colorMode = useSelector(
    (state: RootState) => state.colorModeToggler.value
  );
  return (
    <div
      className={`${styles.container} flex ${
        colorMode === "dark" ? "theme-dark" : "theme-light"
      } `}
    >
      <div className={styles.category}>{category}</div>
      <div className={styles.stats}>
        <div className={styles["team-stat"]}>{teamValue}</div>
        <div className={styles.record}>{recordValue}</div>
        <div className={styles["record-holder"]}>
          <div
            className={`${styles["logo-container"]} ${
              colorMode === "dark" ? "theme-dark" : "theme-light"
            }`}
          >
            <img
              src={require(`../logos/${recordTeam}.svg`)}
              alt="logo"
              className={styles.logo}
            />
          </div>
        </div>
        <div className={styles.season}>{season}</div>
      </div>
    </div>
  );
};
