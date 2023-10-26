const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const PORT = 3000;

const app = express();

app.use(bodyParser.json());

mongoose
  .connect(`${DB_URL}`)
  .then(() => console.log("Connected to mongodb successfully"))
  .catch((ex) => console.log("Error occurred", ex));

require("./routes")(app);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
