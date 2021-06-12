require("dotenv").config();
const express = require("express");
const cors = require("cors");

const sequelize = require("./config/connection");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(routes);

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
