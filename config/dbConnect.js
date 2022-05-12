import pgPromise from "pg-promise";

const pgp = pgPromise({});
const db = pgp("postgres://postgres:learn@sql@localhost:5432/EPL");

db.any("select * from standings", [true])
  .then((data) => {
    console.log("DATA:", data[0]); // print data;
  })
  .catch((error) => {
    console.log("ERROR:", error); // print the error;
  });
