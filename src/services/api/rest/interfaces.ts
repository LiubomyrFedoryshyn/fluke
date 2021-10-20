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

export interface Category {
    id: number;
    title: string;
    link: string;
    description: string;
    layers: string;
}

export interface Categories {
    title: string;
    description: string;
    link: string;
    categories: Category[];
}

export interface Option {
    value: string | number;
    label: string;
}
