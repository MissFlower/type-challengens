// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<IsTuple<[]>, true>>,
  Expect<Equal<IsTuple<[number]>, true>>,
  Expect<Equal<IsTuple<readonly [1]>, true>>,
  Expect<Equal<IsTuple<{ length: 1 }>, false>>,
  Expect<Equal<IsTuple<number[]>, false>>,
  Expect<Equal<IsTuple<never>, false>>,
]


// ============= Your Code Here =============
// 元组和数组的区别在于，元组的长度是有限的，数组是无限的，也就是他们的 ['length'] 返回的结果是不同的

// 元组返回的是数字
// 数组返回的是 number
// 因此可以根据这个特征来判断，需要注意 T extends readonly any[] 前置判断，因为 {length : 1} 的用例会通过
type IsTuple<T>= [T] extends [never] ?
  false :
  T extends ReadonlyArray<unknown> ?
    number extends T['length'] ?
      false :
      true :
    false;

type A = string[]
type B = A['length']

type C = [1, 2, 3]
type D = C['length']