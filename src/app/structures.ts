export class Queue<T>{
    private q:T[] = [];

    constructor(private data?: T | T[]){
        if(data){ this.add(data); }
    }

    getQueue(): T[] {
        return this.q;
    }

    add(data: T | T[]): void{
        this.q = this.q.concat(data);
    }

    pop(): T | undefined {
        const data = this.q.shift();
        return data;
    }

}