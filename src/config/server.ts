import express from "express";
import cors from "cors";
import { setupSwagger } from "./swagger";
import { config } from "./config";

const app = express();

app.use(cors());
app.use(express.json());

setupSwagger(app);

app.get("/", (req, res) => {
  res.send("ASaudex API 2.0 is starting!");
});

app.listen(config.server.port, () => {
  console.log(`Server running at http://localhost:${config.server.port}`);
});
