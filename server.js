import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("./"));

app.listen(PORT, function () {
  console.log(`Server is running on port: ${PORT}`);
});
