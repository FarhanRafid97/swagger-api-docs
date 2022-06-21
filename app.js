const express = require("express");

const router = require("./routes");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
