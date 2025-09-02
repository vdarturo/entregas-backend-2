import express from "express"
import config from "./config/config.js";

const app = express();
const PORT = config.PORT

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
})