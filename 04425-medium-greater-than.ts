// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>,
]


// ============= Your Code Here =============
// type ArrayWithLength<T extends number, U extends any[] = []> = U['length'] extends T ? U : ArrayWithLength<T, [true, ...U]>;
// type GreaterThan<T extends number, U extends number> = ArrayWithLength<U> extends [...ArrayWithLength<T>, ...infer _] ? false : true;

// 可以采用递归来实现，前面我们也有说过了，数组的很容易爆掉，但是测试用例还算温柔，这题能过

// 思路是拿一个新数组，和 T,U 进行对比，哪个先追上新数组的长度，哪个就小
// 简单一点来说就是，两个不一样长的木棍放在一起，我们从一端开始不断往前走，先摸到的那个木棍就是短一点的
// 看到具体实现上

// 通过引入新的变量 R extends any[] = [] ,来进行辅助的计算，接着依次判断 T，U 和 R['length] 是否相等，这时候，如果 T 和 R['length] 相等了而 U 还没有相等，那就说明了 T < U ，如果都不相等，那就继续加大数组 R 的长度

// 怎么加大数组 R 呢？

// 递归的时候，往数组中多加一个值即可，GreaterThan<T, U, [...R, 1]> 这里的 1 就是塞进去把 length 整大的

// 这样就完成了这道大小判断


type GreaterThan<T extends number, U extends number, R extends any[] = []> = 
  T extends R['length']
    ? false
    : U extends R['length']
      ? true
      : GreaterThan<T, U, [...R, 1]>