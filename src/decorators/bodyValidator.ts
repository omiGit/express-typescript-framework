import { Metadata } from "../keys";

export function bodyValidator(...keysToValidate: string[]) {
  return function (target: any, key: string) {
    Reflect.defineMetadata(Metadata.validator, keysToValidate, target, key);
  };
}
