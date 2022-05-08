import { Header } from "../components/Header";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { BASE_URL } from "../CONSTANTS";
import styles from "./teamPage.module.css";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { StatBanner } from "../components/StatBanner";

const url = BASE_URL + "gi";

export const TeamPage = () => {
  const colorMode = useSelector(
    (state: RootState) => state.colorModeToggler.value
  );

  let location = useLocation();
  let team = location.pathname.split("/")[1].replace(/%20/g, " ");
  const [minGoals, setMinGoals] = useState([]);
  const [totalSeasons, setTotalSeasons] = useState(0);
  const [teamSeasons, setTeamSeasons] = useState(0);

  const getTeam = useCallback(
    async (url: string) => {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ team }),
      });
      const data = await response.json();
      setMinGoals(data[0]);
      setTotalSeasons(data[1][0].count);
      setTeamSeasons(data[2][0].count);
    },
    [team]
  );

  useEffect(() => {
    getTeam(url);
  }, [getTeam]);

  return (
    <div
      className={`${styles["team-page"]} ${
        colorMode === "dark" ? "theme-dark" : "theme-light"
      }`}
    >
      <Header />
      <div
        className={`${styles["logo-container"]} ${
          colorMode === "dark" ? "theme-dark" : "theme-light"
        }`}
      >
        <img
          src={require(`../logos/${team}.svg`)}
          alt="logo"
          className={styles.logo}
        />
      </div>

      <div
        className={`${styles["stats-container"]} ${
          colorMode === "dark" ? "theme-dark" : "theme-light"
        }`}
      >
        {/* <h3>
          {team} has been part of {teamSeasons} out of total {totalSeasons} EPL
          seasons till date
        </h3> */}
        {/* <h1>Check</h1> */}
        <StatBanner
          category="Goals For"
          teamValue={45}
          recordValue={100}
          recordTeam={"Manchester City"}
          season={"1992-93"}
        />
        <StatBanner
          category="Goals Against"
          teamValue={50}
          recordValue={60}
          recordTeam={"Sheffield United"}
          season={"1997-98"}
        />
        <StatBanner
          category="Wins"
          teamValue={25}
          recordValue={32}
          recordTeam={"Liverpool"}
          season={"2017-18"}
        />
        <StatBanner
          category="Points"
          teamValue={85}
          recordValue={105}
          recordTeam={"Manchester City"}
          season={"2017-18"}
        />
        <StatBanner
          category="Losses"
          teamValue={32}
          recordValue={0}
          recordTeam={"Arsenal"}
          season={"2002-03"}
        />
        <StatBanner
          category="Points"
          teamValue={85}
          recordValue={105}
          recordTeam={"Manchester City"}
          season={"2017-18"}
        />

        <StatBanner
          category="Points"
          teamValue={85}
          recordValue={105}
          recordTeam={"Manchester City"}
          season={"2017-18"}
        />

        <StatBanner
          category="Points"
          teamValue={85}
          recordValue={105}
          recordTeam={"Manchester City"}
          season={"2017-18"}
        />

        <StatBanner
          category="Points"
          teamValue={85}
          recordValue={105}
          recordTeam={"Manchester City"}
          season={"2017-18"}
        />

        {/* <ul className={styles["team-stats"]}>
          {minGoals.map((line: any) => (
            <li key={line.season}>
              {team} has scored {line.goals_for} in {line.season} season
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};
