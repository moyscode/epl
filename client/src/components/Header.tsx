import styles from "./header.module.css";
import Link from "./Link";

// export const Header = () => {
//   return (
//     <div className={`${styles.header} flex theme-light`}>
//       Header
//       <nav className={styles.nav}>
//         <Link to="/">Home</Link> |<Link to="/about">About</Link> |{" "}
//         <Link to="/contact">Contact</Link>
//       </nav>
//     </div>
//   );
// };

export const Header = () => {
  return (
    <div className={`${styles.header} flex theme-light`}>
      Header
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
