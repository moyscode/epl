import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { AboutPage } from "./pages/aboutPage";
import { ContactPage } from "./pages/contactPage";
import { TeamPage } from "./pages/teamPage";

function App() {
  return (
    <div className={`app theme-light`}>
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
