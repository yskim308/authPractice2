import express from "express";
import passport from "passport";
import "../auth/googleAuth.ts";
export { router };

const router = express.Router();

router.get("/auth/google", (req: express.Request, res: express.Response) => {
  passport.authenticate("google", { scope: ["email", "profile"] });
});

router.get(
  "/auth/google/callback",
  (req: express.Request, res: express.Response) => {
    passport.authenticate("google", {
      successRedirect: "/protected",
      failureRedirect: "/auth/failure",
    });
  },
);

router.get("/auth/failure", (req: express.Request, res: express.Response) => {
  res.status(401).send("auth failure");
});
