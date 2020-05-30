import { Request, Response, NextFunction } from "express";

export function authRequired(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.email) {
    next();
  }
  res.redirect("/");
}
