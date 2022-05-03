import styles from "./ColorModeToggler.module.css";

import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { colorModeChange } from "../redux/colorModeSlice";

export const ColorModeToggler = () => {
  const colorMode = useSelector(
    (state: RootState) => state.colorModeToggler.value
  );
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(colorModeChange())}
      className={`${styles.content} ${colorMode === "dark" ? styles.dark : ""}`}
    >
      <div
        className={`${styles.circle} ${
          colorMode === "dark" ? styles.dark : ""
        }`}
      >
        <div
          className={`${styles.crescent} ${
            colorMode === "dark" ? styles.dark : ""
          }`}
        />
      </div>
    </div>
  );
};
