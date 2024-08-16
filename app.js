const express = require("express");
const app = express();
const port = 3003;
app.use(express.json());

const connectDb = require("./config/db");
const studentRoutes = require("./routes/students.routes");
const authRoutes = require('./routes/auth.routes');
const libraryRoutes = require('./routes/library.routes');
const principleRoutes = require('./routes/principle.routes');
const adminRoutes = require('./routes/adminAuth.routes');
connectDb();

app.use("/students", studentRoutes);
app.use("/auth", authRoutes);
app.use("/libraries", libraryRoutes);

app.use("/adminAuth",adminRoutes);
app.use("/principles", principleRoutes);


app.all("*", (req, res) => {
  res.status(404).json({
    message: "Route not Found",
  });
});

app.listen(port, () => {
  console.log(`App is Listening on port ${port}`);
});
