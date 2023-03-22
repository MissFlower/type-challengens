// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<BEM<'btn', ['price'], []>, 'btn__price'>>,
  Expect<Equal<BEM<'btn', ['price'], ['warning', 'success']>, 'btn__price--warning' | 'btn__price--success' >>,
  Expect<Equal<BEM<'btn', [], ['small', 'medium', 'large']>, 'btn--small' | 'btn--medium' | 'btn--large' >>,
]


// ============= Your Code Here =============
type Element<T extends string[]> = T extends [] ? '' : `__${T[number]}`
type Modifier<T extends string[]> = T extends [] ? '' : `--${T[number]}`
type BEM<B extends string, E extends string[], M extends string[]> = `${B}${Element<E>}${Modifier<M>}`


type Test = ['A', 'B', 'C']
type Test1 = Test[number]