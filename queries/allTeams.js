import pgPromise from "pg-promise";

const pgp = pgPromise({});
const db = pgp("postgres://postgres:learn@sql@localhost:5432/EPL");

export const getAllTeams = (req, res, next) => {
  db.any(`SELECT DISTINCT team FROM standings`)
    .then(function (data) {
      res.status(200).send(data);
    })
    .catch(function (err) {
      return next(err);
    });
};
