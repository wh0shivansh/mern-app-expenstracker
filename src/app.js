const express = require("express");
const cors = require("cors");
const path = require('path');
const dotenv = require("dotenv");
const dbConnect = require("./config/db/dbConnect");
const userRoutes = require("./route/users/usersRoute");
const { errorHandler, notFound } = require("./middlewares/error/errorHandler");
const incomeRoute = require("./route/income/income");
const expenseRoute = require("./route/expense/expense");
const accountStatsRoute = require("./route/stats/stats");


//dotenv
dotenv.config();
const app = express();
dbConnect();

app.use(express.static(path.join(__dirname + "/build")))
//-------------
//Middleware
//--------------
app.use(express.json());
//cors
app.use(cors());
//Users route
app.use("/api/users", userRoutes);
//incomeRout
app.use("/api/incomes", incomeRoute);
//Expenses
app.use("/api/expenses", expenseRoute);
//stats
app.use("/api/stats", accountStatsRoute);
//err handler
app.use(notFound);
app.use(errorHandler);

module.exports = app;
