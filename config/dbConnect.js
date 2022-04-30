import pgPromise from "pg-promise";

const pgp = pgPromise({});
const db = pgp("postgres://postgres:learn@sql@localhost:5432/EPL");

// db.connect()
//   .then((obj, client) => {
//     console.log("Connected to database");
//     client.query("SELECT * FROM standings", function (err, result) {
//       console.log(result);
//       done();
//     });
//     obj.done(); // success, release connection;
//   })
//   .catch((error) => {
//     console.error("ERROR:", error.message);
//   });
db.any("select * from standings", [true])
  .then((data) => {
    console.log("DATA:", data[0]); // print data;
  })
  .catch((error) => {
    console.log("ERROR:", error); // print the error;
  });
