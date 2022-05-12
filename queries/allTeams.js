import pgPromise from "pg-promise";
import { dbConnection } from "../db.js";

const pgp = pgPromise({});
const db = pgp(dbConnection);

export const getAllTeams = (req, res, next) => {
  db.any(`SELECT DISTINCT team FROM standings`)
    .then(function (data) {
      res.status(200).send(data);
    })
    .catch(function (err) {
      return next(err);
    });
};
