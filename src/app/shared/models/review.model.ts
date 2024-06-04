export interface Review {
    rating: number;
    description: string;
    date: Date;
    authorId?: string;
    author: string;
    type: ReviewType,
    id?: number;
}

export enum ReviewType {
  HOST = 'HOST',
  PROPERTY = 'PROPERTY',
}
