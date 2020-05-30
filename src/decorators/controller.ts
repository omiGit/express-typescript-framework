import { Methods, Metadata } from "../keys";
import Router from "../AppRouter";
import { bodyValidator } from "../middlewares/bodyValidator";

export function controller(pathPrefix: string) {
  return function (target: any) {
    const router = Router.getInstance();
    for (let key in target.prototype) {
      const requestHandler = target.prototype[key];
      const path: string = Reflect.getMetadata(
        Metadata.path,
        target.prototype,
        key
      );
      const method: Methods = Reflect.getMetadata(
        Metadata.method,
        target.prototype,
        key
      );

      //middleware
      const middleware =
        Reflect.getMetadata(Metadata.middlewear, target.prototype, key) || [];

      //validatory
      const bodyKeysToValidate =
        Reflect.getMetadata(Metadata.validator, target.prototype, key) || [];
      const bodyValidate = bodyValidator(...bodyKeysToValidate);

      console.log(bodyKeysToValidate, key, bodyValidate);

      if (path) {
        router[method](
          `${pathPrefix}${path}`,
          ...middleware,
          bodyValidate,
          requestHandler
        );
      }
    }
  };
}
