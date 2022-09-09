const mongoose = require("mongoose");
const express = require("express");

const app = express();
app.use(express.json());
app.use(require("./routers/routers"));

const port = 3000;

mongoose
  .connect("mongodb+srv://Mansur:1954@cluster0.xyb0huh.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));


app.listen(port, function (req, res) {
  console.log("Сервер запущен.");
});
