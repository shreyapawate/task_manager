
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT ||5000;


app.get("/", (req, res) => {
  res.send("TASK MANAGER SERVER running ");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
