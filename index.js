const express = require("express");
const app = express();
const router = require("./routes/appRoutes");

app.use(router);

app.listen(3000, () => {
  console.log("server started on port 3000");
});
