import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { router as dbRouter } from "./routes/dbRoutes.js";
// set port, listen for requests
const PORT = process.env.PORT || 8080;

const app = express();

//allow cross origin requests from React
const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to mohan's application." });
});

app.use("/api", dbRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build.index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
