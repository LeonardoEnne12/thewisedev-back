export class Left<L, A> {
    readonly value: L

    constructor (value: L) {
      this.value = value
    }

    isLeft (): this is Left<L, A> {
      return true
    }

    isRight (): this is Left<L, A> {
      return false
    }
}

export class Rigth<L, A> {
    readonly value: A

    constructor (value: A) {
      this.value = value
    }

    isLeft (): this is Left<L, A> {
      return false
    }

    isRight (): this is Left<L, A> {
      return true
    }
}

export type Either<L, A> = Left<L, A> | Rigth<L, A>

export const left = <L, A>(l: L): Either<L, A> => {
  return new Left<L, A>(l)
}

export const right = <L, A>(a: A): Either<L, A> => {
  return new Rigth<L, A>(a)
}
