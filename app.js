const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from the JavaScript app running through Jenkins, Maven, SonarQube, and Docker!",
    status: "ok"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({ health: "UP" });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
}

module.exports = app;
