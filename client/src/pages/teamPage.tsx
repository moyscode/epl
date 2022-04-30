import { Header } from "../components/Header";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { BASE_URL } from "../CONSTANTS";

const url = BASE_URL + "gi";

export const TeamPage = () => {
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
    <div className="team-page">
      <Header />
      <h1>{team}</h1>
      <h3>
        {team} has been part of {teamSeasons} out of total {totalSeasons} EPL
        seasons till date
      </h3>
      <ul className="team-stats">
        {minGoals.map((line: any) => (
          <li key={line.season}>
            {team} has scored {line.goals_for} in {line.season} season
          </li>
        ))}
      </ul>
    </div>
  );
};