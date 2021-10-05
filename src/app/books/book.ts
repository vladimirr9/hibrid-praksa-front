import { Author } from "../authors/author";

export interface Book {
    id: number
    title: string
    description: string
    creationDate: Date
    isbn: string
    authors: Author[]
    quantity: number
    imageUrl: string
    
}