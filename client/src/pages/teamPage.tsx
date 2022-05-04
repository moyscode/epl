import { Header } from "../components/Header";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { BASE_URL } from "../CONSTANTS";
import styles from "./teamPage.module.css";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

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
        <h3>
          {team} has been part of {teamSeasons} out of total {totalSeasons} EPL
          seasons till date
        </h3>
        <h1>Check</h1>
        <h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
          praesentium odio saepe nobis consequuntur eveniet. Ex enim architecto
          veniam deserunt necessitatibus natus autem, dolore sint quisquam
          voluptas odio. Eveniet ipsam culpa sapiente praesentium autem nihil ab
          ratione ea, repellat perspiciatis natus accusamus nulla quae quasi
          maxime totam. Corrupti assumenda alias laboriosam facilis, modi ex
          placeat. Iste, modi libero quod ipsam laudantium mollitia. Veritatis
          harum beatae, magni debitis, voluptatum suscipit aliquid ullam numquam
          deleniti rem esse delectus cumque. Tempore nesciunt quis magnam modi,
          laborum fugit aliquam laudantium, tempora hic aliquid amet nemo illum
          voluptas! Animi magnam, iure officiis architecto porro assumenda
          ratione doloribus explicabo voluptates modi perferendis, vero, dolor
          rem dolorem dolore? Asperiores voluptas quasi atque deleniti nam hic
          excepturi, similique officia illo. Modi sunt error ad ut quis ab
          atque, saepe reprehenderit numquam odio consequuntur totam ipsam
          labore ex deserunt natus alias dignissimos cupiditate molestiae neque
          illo tempora! Optio, nisi enim! Soluta quam at quibusdam alias ipsam
          nihil fugiat, quae assumenda nulla ipsa molestias fugit impedit illum
          inventore repellendus, possimus nisi voluptatem quod in ut deserunt
          magnam. Libero, nulla nostrum vel sint dolore fugit nam impedit
          accusantium maxime eligendi sit exercitationem aspernatur facilis
          asperiores corrupti labore ipsam voluptate ab molestiae. Temporibus
          quibusdam voluptatum optio, velit tenetur dolore magni error sit
          distinctio praesentium asperiores molestias ut quo deleniti, fugit
          ullam reiciendis nobis, quae vero! Provident, repellat accusamus
          magnam iure perferendis quos corrupti voluptate temporibus itaque, ea
          explicabo doloremque officiis eius libero culpa pariatur deserunt
          dolorem, modi recusandae? Dolorem labore iure sequi voluptates
          numquam, quos veniam corporis in natus id expedita ullam incidunt
          accusantium aspernatur magnam dolorum tempore at. Quam commodi esse,
          blanditiis ducimus, cupiditate odit consequatur voluptatibus maiores
          provident sint ratione optio. Libero, numquam. Id veniam quaerat
          eligendi consequatur dolor obcaecati quo nihil debitis eius assumenda
          eaque quae laudantium nobis libero voluptatibus rerum aliquam quidem
          quos repellat modi facilis doloribus, enim quis! Nemo dolores
          obcaecati recusandae mollitia. Quasi reiciendis voluptatem repellat
          nostrum molestias consequuntur iure vitae qui, veniam dignissimos
          voluptas ex eligendi consequatur atque. Eius atque omnis tempora
          minus?
        </h3>
        <ul className={styles["team-stats"]}>
          {minGoals.map((line: any) => (
            <li key={line.season}>
              {team} has scored {line.goals_for} in {line.season} season
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
