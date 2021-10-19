export interface IEvents {
    categories: any[];
    description: string;
    geometries: any[];
    id: string;
    link: string;
    sources: any[];
    title: string;
    closed?: string;
}

export interface AdditionalInfo {
    description: string;
    events: IEvents[];
    link: string;
    title: string;
}
