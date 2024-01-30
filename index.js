const express = require("express");
const app = express();
<<<<<<< HEAD
const router = require("./routes/appRoutes");

app.use(router);
=======

app.get("/", (req, res) => {
  res.send("Hello world!");
});
>>>>>>> b1c963f62afa08f9ce60a69ed208a60b3d937dce

app.listen(3000, () => {
  console.log("server started on port 3000");
});
