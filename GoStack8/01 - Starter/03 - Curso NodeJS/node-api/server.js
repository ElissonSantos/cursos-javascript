const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

// Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect(
  "mongodb+srv://elissonsantos:cjy3mssGWdJrPzul@elissonsantos-mphyr.gcp.mongodb.net/node-api?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

requireDir("./src/models");

// Primeira Rota
app.use("/api", require("./src/routes"));

app.listen(3001);
