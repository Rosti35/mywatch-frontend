export type AnyCase<T extends string> = string extends T
  ? string
  : T extends `${infer T1}${infer T2}${infer R}`
  ? `${Uppercase<T1> | Lowercase<T1>}${Uppercase<T2> | Lowercase<T2>}${AnyCase<R>}`
  : T extends `${infer T1}${infer R}`
  ? `${Uppercase<T1> | Lowercase<T1>}${AnyCase<R>}`
  : '';

export type LiteralUnion<T extends U, U = string> = T | (U & Record<never, never>);
