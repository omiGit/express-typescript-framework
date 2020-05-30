import { RequestHandler } from "express";
import { Metadata } from "../keys";

export function use(...middleware: RequestHandler[]) {
  return function (target: any, key: string) {
    const middlewareList =
      Reflect.getMetadata(Metadata.middlewear, target, key) || [];
    Reflect.defineMetadata(
      Metadata.middlewear,
      [...middlewareList, ...middleware],
      target,
      key
    );
  };
}
