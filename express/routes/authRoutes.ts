import express from "express";
import passport from "passport";
import "../auth/googleAuth.ts";
export { router };

const router = express.Router();

router.get("/google", (req: express.Request, res: express.Response) => {
  passport.authenticate("google", { scope: ["email", "profile"] });
});

router.get(
  "/google/callback",
  (req: express.Request, res: express.Response) => {
    passport.authenticate("google", {
      successRedirect: "/protected",
      failureRedirect: "/auth/failure",
    })(req, res);
  },
);

router.get("/failure", (req: express.Request, res: express.Response) => {
  res.status(401).send("auth failure");
});
