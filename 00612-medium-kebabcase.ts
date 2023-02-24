// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
  Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
  Expect<Equal<KebabCase<'-'>, '-'>>,
  Expect<Equal<KebabCase<''>, ''>>,
  Expect<Equal<KebabCase<'😎'>, '😎'>>,
]


// ============= Your Code Here =============
// Uncapitalize Lowercase
// type KebabCase<S> =  S extends `${infer F}${infer R}` ? `${Lowercase<F>}${KebabCase<R extends Uncapitalize<R> ? Uncapitalize<R> : `-${Uncapitalize<R>}`>}` : S

type KebabCase<S extends string> = S extends `${infer First}${infer Rest}`
? Rest extends Uncapitalize<Rest> 
  ? `${Lowercase<First>}${KebabCase<Rest>}`
  : `${Lowercase<First>}-${KebabCase<Rest>}`
: S