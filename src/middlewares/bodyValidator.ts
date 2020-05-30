import { Request, Response, NextFunction } from "express";

export function bodyValidator(...keys: string[]) {
  console.log("keys in bodyValidor :", keys);
  return function (req: Request, res: Response, next: NextFunction) {
    for (let key of keys) {
      if (!req.body[key]) {
        res.send(
          `Request does not fullfil requirements <br/> <a href="/login">Login Again</a>`
        );
      }
    }
    next();
  };
}
