export interface Writer{
    write(data: string, args?: WriterArgs): void;
}

export interface WriterArgs {
    tag?: string;
    htmlOutput?: InnerHTML; 
}