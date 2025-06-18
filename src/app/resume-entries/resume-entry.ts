export interface Resume{
    header: ResumeHeader
    items: ResumeEntry[],
}

export interface ResumeEntry {
    id: string,
    resumeId: string,
    text: string,
}

export interface ResumeHeader{
    id: string;
    title: string,
    group: string,
    date: string,
    location: string,
}