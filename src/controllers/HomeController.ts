import { Request, Response } from "express";
import { controller, get } from "../decorators";

@controller("")
export class HomeController {
  @get("/")
  homePage(req: Request, res: Response) {
    res.send(`
      <div>
         <h1>Welcome To Express-Typescript-Framework</h1>
         <a href="/login"> Login to Continue</a>
         </div>
         `);
  }
}
