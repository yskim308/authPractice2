import express from "express";
import cors from "cors";
import passport from "passport";

const app = express();
app.use(cors());
const port = 4000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

