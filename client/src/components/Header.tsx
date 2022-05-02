import { ColorToggler } from "./ColorToggler";
import styles from "./header.module.css";
import Link from "./Link";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

export const Header = () => {
  const colorMode = useSelector(
    (state: RootState) => state.colorModeToggler.value
  );

  return (
    <div
      className={`${styles.header} flex ${
        colorMode === "dark" ? "theme-dark" : "theme-light"
      }`}
    >
      <h3>Header</h3>
      <ColorToggler />
      <nav className={styles.nav}>
        <Link className={styles.link} to="/">
          Home
        </Link>
        <Link className={styles.link} to="/about">
          About
        </Link>
        <Link className={styles.link} to="/contact">
          Contact
        </Link>
      </nav>
    </div>
  );
};
