import fetch from "node-fetch";
import express from "express";
const app = express();
app.use(express.json());
const PORT = 8080;

let teacher = [];
let student = [];

app.get("/", async (req, res) => {
  const home = "Welcome to our website";
  res.send(home);
});

app.get("/home", async (req, res) => {
  const home = "Welcome to our website";
  res.send(home);
});
app.get("/teacher", async (req, res) => {
  const test = "Teacher List";
  res.send(test);
});
app.get("/student", async (req, res) => {
  const test = "Student List";
  res.send(test);
});

app.post("/teacher", (req, res) => {
  teacher.push(req.body);
  console.log(teacher);
  res.status(201);
  res.send("Teacher added to the list.");
});

app.post("/student", (req, res) => {
  student.push(req.body);
  console.log(student);
  res.status(201);
  res.send("Student added to the list.");
});

app.listen(PORT, (req, res) => {
  console.log("App is up and running on server", PORT);
});
