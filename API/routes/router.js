import express from "express";

import {
  addNewPatient,
  getPatients,
  getPatient,
  updatePatient,
  deletePatient,
} from "../controllers/patientController.js";

const router = express.Router();

router.post("/patients", addNewPatient);
router.get("/patients", getPatients);
router.get("/patients/:id", getPatient);
router.put("/patients/:id", updatePatient);
router.delete("/patients/:id", deletePatient);

export default router;
