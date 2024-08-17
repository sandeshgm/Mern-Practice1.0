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
const ceoAdminRoutes = require('./routes/ceoAdminRoutes');
const managerRoutes = require('./routes/manager.routes');
const managerAuthRoutes = require('./routes/managerAuth.routes');
const customerRoutes = require('./routes/customer.routes');
const customerAuthRoutes = require("./routes/customerAuth.routes");
connectDb();

app.use("/students", studentRoutes);
app.use("/auth", authRoutes);
app.use("/libraries", libraryRoutes);

app.use("/adminAuth",adminRoutes);
app.use("/principles", principleRoutes);

app.use("/superAdmin", ceoAdminRoutes);
app.use("/managers", managerRoutes);
app.use("/managerAuth", managerAuthRoutes);
app.use("/customers", customerRoutes);
app.use("/customerAuth", customerAuthRoutes);


app.all("*", (req, res) => {
  res.status(404).json({
    message: "Route not Found",
  });
});

app.listen(port, () => {
  console.log(`App is Listening on port ${port}`);
});
