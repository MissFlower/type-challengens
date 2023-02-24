// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<DeepReadonly<X1>, Expected1>>,
  Expect<Equal<DeepReadonly<X2>, Expected2>>,
]

type X1 = {
  a: () => 22
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: 'string'
        }
        k: 'hello'
      }
      l: [
        'hi',
        {
          m: ['hey']
        },
      ]
    }
  }
}

type X2 = { a: string } | { b: number }

type Expected1 = {
  readonly a: () => 22
  readonly b: string
  readonly c: {
    readonly d: boolean
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true
          readonly j: 'string'
        }
        readonly k: 'hello'
      }
      readonly l: readonly [
        'hi',
        {
          readonly m: readonly ['hey']
        },
      ]
    }
  }
}

type Expected2 = { readonly a: string } | { readonly b: number }


// ============= Your Code Here =============
// type DeepReadonly<T> = {
//   readonly [K in keyof T]: T[K] extends {[ x: number]: unknown} ? DeepReadonly<T[K]> : T[K]
// }
// type ResultValueType = PropertyKey | ((...args: any[]) =>any)
// type DeepReadonly<T> = {
//   readonly [P in keyof T]: T[P] extends ResultValueType ?  T[P] : DeepReadonly<T[P]>
// }
// `type DeepReadonly<T> = T extends object & { call?(): never } ? {
//   readonly [Key in keyof T]: DeepReadonly<T[Key]>
// } : T`

type DeepReadonly<T> = T extends (Record<string, unknown> | Array<unknown>) ? { readonly [Key in keyof T]: DeepReadonly<T[Key]> } : T
// type DeepReadonly<T> = {
//   readonly [Key in keyof T]: T[Key] extends Object ? T[Key] extends Function ? T[Key] : DeepReadonly<T[Key]> : T[Key];
// }