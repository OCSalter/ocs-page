export interface Monad<T>{
    flatMap<A>(f: (_: T) => A) : Monad<A>;
}

export class Option<T> implements Monad<T>{

    constructor(private item : T | undefined) {}

    public static Some(_: any): Option<any> {
        return new Option<any>(_);
    }

    public flatMap<A>( f: (_: T) => A) : Option<A> {
        return new Option<A>(this.item ? f(this.item) : undefined);
    }

    get(): T | undefined{
        return this.item;
    }
}

export function Some<T>(_: T): Option<T> {
    return new Option<T>(_);
}

export function None<T>(): Option<T> {
    return new Option<T>(undefined);
}
