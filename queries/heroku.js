import pgPromise from "pg-promise";

const pgp = pgPromise({});
const db = pgp(
  "postgres://ejruzlqjhxfcdt:acfdc550e3363d3cd7f1c62a40a293b0d3a133674df4aea74fe1fb218e391a3b@ec2-99-80-170-190.eu-west-1.compute.amazonaws.com:5432/daa65pdffu1aue"
);
db.connect()
  .then((obj) => {
    // Can check the server version here (pg-promise v10.1.0+):
    const serverVersion = obj.client.serverVersion;
    console.log(serverVersion);

    obj.done(); // success, release the connection;
  })
  .catch((error) => {
    console.log("ERROR:", error.message || error);
  });
