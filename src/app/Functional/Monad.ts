export interface Monad<T>{
    flatMap<A>(f: (_: T) => A) : Monad<A>;
}

export class Option<T>{

    constructor(private item : T | undefined | null) {}

    public map<A>(f: (_: T) => A): Option<A> {
        return this.item ? new Option(f(this.item)) : None<A>();
    }

    public flatMap<A>(f: (_: T) => Option<A>) : Option<A> {
        return this.item ? f(this.item) : None<A> ();
    } 

    get(): T | undefined | null {
        return this.item;
    }
}

export function Some<T>(_: T | undefined | null): Option<T> {
    return new Option<T>(_);
}

export function None<T>(): Option<T> {
    return new Option<T>(undefined);
}


export class Either<T> {
    constructor(private right?: T, private left?: any) { }

    public map<A> (f: (_: T) => A) : Either<A> {
        return this.right ? 
            Right (f(this.right)) : 
            Left (this.left);
    }

    public flatMap<A>(f: (_: T) => Either<A>) : Either<A> {
        return this.right ? 
            (f(this.right)) : 
            Left (this.left);
    }

    public getRight(): T | undefined {
        return this.right;
    }

    public getLeft(): any {
        return this.left;
    }
}

export function GenerateEither<T>(_: T | Error | undefined): Either<T> {
    if(!_ || _ instanceof Error){
        return Left<T>(_);
    }
    return Right<T>(_);
} 

export function Right<T>(_: T): Either<T> {
    return new Either<T>(_, undefined);
}

export function Left<T>(_: any): Either<T> {
    return new Either<T>(undefined, _ ? _ : new Error("Generated Either with no Arguments"));
}
