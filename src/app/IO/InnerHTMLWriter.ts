import { Writer, WriterArgs } from "./Writer";

export class InnerHTMLWriter implements Writer {

    constructor(private element: HTMLElement | null) {}

    write(data: string, args?: WriterArgs): void {
        if(this.element){
            this.element.innerHTML = data;
        }
    }
}
