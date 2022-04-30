import { Header } from "../components/Header";
import { useState, useCallback, useEffect } from "react";
import { BASE_URL } from "../CONSTANTS";
import { TeamBanner } from "../components/TeamBanner";
import styles from "./homePage.module.css";

const url = BASE_URL + "allTeams";
const toggled = true;

export const HomePage = () => {
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

  return (
    <div
      className={`${styles["home-page"]} ${
        toggled ? "theme-dark" : "theme-light"
      }`}
    >
      <Header />
      <p>{team}</p>
      <div className={`${styles.teams} flex theme-light`}>
        {teams.map((team) => (
          <TeamBanner key={team} team={team} onBannerClick={onBannerClick} />
        ))}
      </div>
    </div>
  );
};
