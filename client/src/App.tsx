import styles from "./app.module.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { AboutPage } from "./pages/aboutPage";
import { ContactPage } from "./pages/contactPage";
import { TeamPage } from "./pages/teamPage";
import { RootState } from "./redux/store";
import { useSelector } from "react-redux";

function App() {
  const colorMode = useSelector(
    (state: RootState) => state.colorModeToggler.value
  );
  return (
    <div
      className={`${styles.app} ${
        colorMode === "dark" ? "theme-dark" : "theme-light"
      }`}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/:team" element={<TeamPage />} />
      </Routes>
    </div>
  );
}

export default App;
