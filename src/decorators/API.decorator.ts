import "reflect-metadata";
import { Metadata, Methods } from "../keys";

function APIDecorator(method: string) {
  return function (path: string) {
    return function (target: Object, key: string): void {
      Reflect.defineMetadata(Metadata.method, method, target, key);
      Reflect.defineMetadata(Metadata.path, path, target, key);
    };
  };
}

export const get = APIDecorator(Methods.get);
export const post = APIDecorator(Methods.post);
export const put = APIDecorator(Methods.put);
export const del = APIDecorator(Methods.put);
