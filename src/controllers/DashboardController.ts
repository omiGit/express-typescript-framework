import { Request, Response } from "express";
import { controller, get, use } from "../decorators";
import { authRequired } from "../middlewares";
@controller("")
export class DashboardController {
  @get("/dashboard")
  @use(authRequired)
  getDashboard(req: Request, res: Response) {
    const email = req.session ? req.session.email : "";
    res.send(`welcome ${email} <br/> <a href="/logout">Logout</a>`);
  }
}
