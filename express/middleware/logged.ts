import express from "express";

export default function isLoggedIn(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  req.user ? next() : res.sendStatus(401);
}
