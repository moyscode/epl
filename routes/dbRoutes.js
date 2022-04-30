"use strict";
import express from "express";
const router = express.Router();
import { getClubInfo } from "../queries/teamQueries.js";
import { getAllTeams } from "../queries/allTeams.js";

router.post("/gi", getClubInfo);
router.get("/allTeams", getAllTeams);

export { router };
