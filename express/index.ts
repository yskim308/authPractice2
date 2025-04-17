import express from "express";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import { router as authRouter } from "./routes/authRoutes.ts";

const app = express();
app.use(cors());
const port = 4000;

app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());

app.get("/protected", (req: express.Request, res: express.Response) => {
  res.send("hello from protected");
});

app.get("/auth/google", authRouter);
app.get("/auth/google/callback", authRouter);
app.get("/auth/failure", authRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

