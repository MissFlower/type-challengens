// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Fibonacci<1>, 1>>,
  Expect<Equal<Fibonacci<2>, 1>>,
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>,
]


// ============= Your Code Here =============
type Tuple<T extends number, U extends Array<1> = []> = U['length'] extends T ? U : Tuple<T, [...U, 1]>
type Add<T extends number, U extends number> = [...Tuple<T>, ...Tuple<U>]['length']
type MinusOne<T extends number, U = Tuple<T>> = U extends [infer F, ...infer R] ? R['length'] : never
type Fibonacci<T extends number> = T extends 0 ? 0 : T extends 1 ? 1 : Add<Fibonacci<MinusOne<MinusOne<T>>>, Fibonacci<MinusOne<T>>>