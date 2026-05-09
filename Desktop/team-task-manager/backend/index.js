const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Team Task Manager Backend Running");
});

app.get("/tasks", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Create Login Page",
      status: "Completed",
    },
    {
      id: 2,
      title: "Build Dashboard",
      status: "In Progress",
    },
  ]);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});