const express = require("express");
const bcrypt = require("bcrypt");
const routes = express.Router();
routes.use(express.json());
const db = require("../models");
const jwt = require("jsonwebtoken");

routes.post("/login", async (req, res) => {
   if (req && req.body) {
      const { email, password } = req.body;
      let user = await db.user.findOne({
         where: {
            email
         }
      });
      if (user) {
         const checkPass = await bcrypt.compare(password, user.password);
         if (checkPass) {
            const {
               dataValues: { email, firstName, lastName }
            } = user;
            const userInfo = {
               email,
               firstName,
               lastName
            };
            const accessToken = jwt.sign(userInfo, "mysecretToken", {
               expiresIn: "90m"
            });
            res.status(200).json({
               userInfo,
               accessToken
            });
         } else {
            res.status(401).json("Incorrect Password! Please try again.");
         }
      } else {
         res.status(404).json("Email not found!");
      }
   }
});

routes.post("/registeruser", async (req, res) => {
   if (req && req.body) {
      const { email, firstName, lastName, password } = req.body;
      let exisitingUser = await db.user.findOne({
         where: {
            email
         }
      });
      if (exisitingUser) {
         return res.status(401).json("Email is already registered.");
      }
      try {
         const result = await db.sequelize.transaction(async (t) => {
            const hashedPassword = await bcrypt.hash(password, 10);

            const loginDetails = await db.user.create(
               {
                  email,
                  password: hashedPassword,
                  firstName,
                  lastName
               },
               {
                  transaction: t
               }
            );
            return loginDetails;
         });
         res.status(201).json({
            status: "success"
         });
      } catch (error) {
         console.error(error);
         res.status(500).json("something went wrong!");
      }
   }
});

module.exports = routes;
