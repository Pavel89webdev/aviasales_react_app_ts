const hasOwnPropertyCheker = <T extends object>(
  object: T,
  key: string | number | symbol
): key is keyof T => Object.prototype.hasOwnProperty.call(object, key);

export default hasOwnPropertyCheker;
