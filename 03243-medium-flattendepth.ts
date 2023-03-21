// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<FlattenDepth<[]>, []>>,
  Expect<Equal<FlattenDepth<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<FlattenDepth<[1, [2]]>, [1, 2]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, [[5]]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 3>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 19260817>, [1, 2, 3, 4, 5]>>,
  Expect<Equal<FlattenDepth<[1, [[[2]]], 3, [[[4]]]], 2>, [1, [2], 3, [4]]>>,
]


// ============= Your Code Here =============
type ShadowFlatten<A extends unknown[]> = 
  A extends [infer X, ...infer Y] ? 
    X extends unknown[] ? [...X, ...ShadowFlatten<Y>] : [X, ...ShadowFlatten<Y>] :
    [];

type FlattenDepth<Target extends unknown[], Depth extends number = 1, Arr extends unknown[] = []> = 
  Arr['length'] extends Depth ? 
    Target :
    ShadowFlatten<Target> extends Target ?
      Target :
      FlattenDepth<ShadowFlatten<Target>, Depth, [unknown, ...Arr]>
