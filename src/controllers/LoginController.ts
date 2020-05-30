import { Request, Response } from "express";
import { get, controller, post, bodyValidator, use } from "../decorators";
import { authRequired } from "../middlewares";
@controller("")
export class LoginController {
  @get("/login")
  getSignIn(req: Request, res: Response) {
    res.send(`
        <form method="post">
            <input type="text" name="email"/> <br/>
            <input type="password" name="password"/><br/>
            <button type="submit">Sign In</button>
        </form>
      `);
  }
  @post("/login")
  @bodyValidator("email", "password")
  postSignIn(req: Request, res: Response) {
    if (req.session) {
      req.session.email = req.body.email;
    }
    res.redirect(`/dashboard`);
  }

  @get("/logout")
  @use(authRequired)
  getLogout(req: Request, res: Response) {
    if (req.session) {
      req.session.email = "";
    }
    res.redirect("/");
  }
}
