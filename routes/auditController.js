const express = require("express");
const routes = express.Router();
routes.use(express.json());
const db = require("../models");
const { QueryTypes } = require("sequelize");

routes.post("/insertAuditAndRetrieveAssignments", async (req, res) => {
   if (req && req.body) {
      const { status, email } = req.body;
      await db.user_audit.create({
         status: status,
         email
      });
      const assignmentDetails = await db.sequelize.query("SELECT * FROM `job_interview_assignment`", { type: QueryTypes.SELECT });
      res.status(200).json(assignmentDetails);
   }
});

module.exports = routes;
