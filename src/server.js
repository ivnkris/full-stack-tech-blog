require("dotenv").config();
const express = require("express");
const cors = require("cors");

const sequelize = require("./config/connection");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

const init = async () => {
  try {
    await sequelize.sync();
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error("Failed to connect to DB");
  }
};

init();
