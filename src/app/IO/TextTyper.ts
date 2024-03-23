import { Observable, Subscription, interval, map } from "rxjs";
import { Queue } from "../structures";
import { Writer } from "./Writer";

export class TextTyper{
    private outputText: string = "";

    private typingSubscription?: Subscription;
    private writer?: Writer;

    private finished: boolean = false;
    private notCurrent: boolean = false;

    constructor(private src: string, private period: number, private id: string) {}

    public start(writer: Writer): void{
        this.writer = writer;
        const textTypingStream = this.generateTextStream(this.src, this.period);
        this.beginTyping(textTypingStream);
    }

    public nextStarted() {
        this.notCurrent = true;
        if(this.finished) {
            this.output(this.src, false);
        }
    }

    public getID(): string{
        return this.id;
    }

    private generateTextStream(_text: string, _period: number): Observable<string | undefined> {
        const q: Queue<string> = new Queue<string>(_text.split(""));
        return interval(_period).pipe(
            map( _ => q.pop() )
        );
    }

    private beginTyping(stream: Observable<string | undefined>): void {
        this.typingSubscription = stream.subscribe( _ => {
            if(_) {
              this.outputText += _ ;
              this.output(this.outputText, true);
            }
            else { this.endSubscription(); }
          });
    }

    private output(_text: string, bar:boolean = false): void {
        this.writer?.write(this.addBar(_text, bar));
    }

    private addBar(_text: string, bar:boolean): string {
        return bar ? "<span class = 'bar'>"+ _text +"</span>" : _text;
    }

    private endSubscription() {
        this.finished = true;
        this.typingSubscription?.unsubscribe();
        
        if(this.notCurrent) {
            this.output(this.src, false);
        }
    }
}