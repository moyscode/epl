import styles from "./statBanner.module.css";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

export const StatBanner = () => {
  const colorMode = useSelector(
    (state: RootState) => state.colorModeToggler.value
  );
  return (
    <div
      className={`${styles.container} flex ${
        colorMode === "dark" ? "theme-dark" : "theme-light"
      } `}
    >
      <p>Goals For (record)</p>
      <p>24 (100)</p>
    </div>
  );
};
