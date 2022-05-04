import { Header } from "../components/Header";
import { useState, useCallback, useEffect } from "react";
import { BASE_URL } from "../CONSTANTS";
import { TeamBanner } from "../components/TeamBanner";
import styles from "./homePage.module.css";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

const url = BASE_URL + "allTeams";

export const HomePage = () => {
  const colorMode = useSelector(
    (state: RootState) => state.colorModeToggler.value
  );

  const getAllTeams = useCallback(async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    const reducer = (accumulator: any, item: any) => {
      accumulator.push(item.team);
      return accumulator;
    };
    const result = data.reduce(reducer, []);
    result.sort();
    setTeams(result);
  }, []);

  useEffect(() => {
    getAllTeams(url);
  }, [getAllTeams]);

  const [teams, setTeams] = useState([]);
  const [team, setTeam] = useState("");
  const onBannerClick = () => setTeam(team);
  const [showNames, setShowNames] = useState(false);

  const showNameToggler = () => {
    setShowNames((s) => !s);
  };

  return (
    <div
      className={`${styles["home-page"]} ${
        colorMode === "dark" ? "theme-dark" : "theme-light"
      }`}
    >
      <button
        className={`${styles["name-button"]} ${
          colorMode === "dark" ? "theme-dark" : "theme-light"
        }`}
        type="button"
        onClick={showNameToggler}
      >
        {showNames ? "Hide Names" : "Show Names"}
      </button>
      <Header />
      <div
        className={`${styles.teams} flex ${
          colorMode === "dark" ? "theme-dark" : "theme-light"
        }`}
      >
        {teams.map((team) => (
          <TeamBanner
            key={team}
            team={team}
            showName={showNames}
            onBannerClick={onBannerClick}
          />
        ))}
      </div>
    </div>
  );
};
