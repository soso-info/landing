const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use("/src", express.static(path.join(__dirname, "src")));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Disciplina de Aco"
  });
});

app.listen(PORT, () => {
  console.log(`Disciplina de Aco rodando em http://localhost:${PORT}`);
});
