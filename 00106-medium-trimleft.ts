// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
  Expect<Equal<TrimLeft<''>, ''>>,
  Expect<Equal<TrimLeft<' \n\t'>, ''>>,
]


// ============= Your Code Here =============
// type TrimLeft<S extends string> = S extends ` ${infer R}` | `\n\t${infer R}` ? TrimLeft<R> : S

type SpaceChart = ' ' | '\n' | '\t'
// type TrimLeft<S extends string> = S extends `${infer F}${infer R}` ? F extends SpaceChart ? TrimLeft<R> : `${F}${R}` :''
type TrimLeft<S extends string> = S extends `${SpaceChart}${infer R}` ? TrimLeft<R> : S
