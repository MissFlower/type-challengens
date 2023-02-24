// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<'   \n\t foo bar\t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>,
]


// ============= Your Code Here =============
// type Trim<S extends string> = S extends ` ${infer R}` | `\n\t${infer R}` | `${infer R} ` | `${infer R} \t` ? Trim<R> : S

type SpaceChart = ' ' | '\n' | '\t'
// type TrimLeft<S extends string> = S extends `${SpaceChart}${infer R}` ? TrimLeft<R> : S
// type TrimRight<S extends string> = S extends `${infer R}${SpaceChart}` ? TrimRight<R> : S

// type Trim<S extends string> = TrimRight<TrimLeft<S>>
type Trim<S extends string> = S extends `${SpaceChart}${infer R}` | `${infer R}${SpaceChart}` ? Trim<R> : S