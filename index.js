const express = require("express");
const routerApi = require("./routes");

const { errorHadler, logErrors } = require("./error.handler");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola!");
});

app.get("/nueva-ruta", (req, res) => {
  res.send("Nueva Ruta!");
});

routerApi(app);

app.use(logErrors);
app.use(errorHadler);

app.listen(port, () => {
  console.log("Escuchando puerto " + port);
});
