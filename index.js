const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const Port = 5000;

require("./db/conn");
app.use(cors());
app.use("/", express.static(path.join(__dirname, "client/build")));
app.use(express.json());
app.use(require("./router/auth"));
app.use(require("./router/Skill_auth"));
app.use(require("./router/Project_auth"));
app.use(require("./router/Service_auth"));
app.use(require("./router/Gallery_auth"));
app.use(require("./router/Acheivements_auth"));
app.use(require("./router/Certification_auth"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(Port, () => {
  console.log("Server is running on the port no" + ` ${Port}`);
});
