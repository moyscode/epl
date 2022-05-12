import pgPromise from "pg-promise";

import { dbConnection } from "../db.js";

const pgp = pgPromise({});
const db = pgp(dbConnection);

export const getClubInfo = (req, res, next) => {
  const { team } = req.body;

  const queries = [
    {
      query: `SELECT * FROM standings WHERE team ='${team}' AND goals_for = (select min(goals_for) FROM standings WHERE team='${team}')`,
    },
    {
      query: `SELECT	count(DISTINCT season) FROM standings`,
    },
    {
      query: `SELECT 	team, COUNT (team) FROM standings WHERE team = '${team}' GROUP BY team`,
    },
  ];

  const sqlQueries = pgp.helpers.concat(queries);
  db.multi(sqlQueries)
    .then(function (data) {
      res.status(200).json(data);
    })
    .catch(function (err) {
      return next(err);
    });
};

// export const getClubInfo = (req, res, next) => {
//   const { team } = req.body;
//   db.any(
//     `select * from standings where team ='${team}' and goals_for = (select min(goals_for) from standings where team='${team}')`
//   )
//     .then(function (data) {
//       res.status(200).json(data);
//     })
//     .catch(function (err) {
//       return next(err);
//     });
// };
