import { Book } from "../books/book";
import { User } from "../users/user";

export interface BookCopy {
    id: number
    book: Book
    renter: User
    rentingDate: Date
    returned: boolean
}