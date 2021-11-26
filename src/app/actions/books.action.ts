import { dashCaseToCamelCase } from "@angular/compiler/src/util";
import { createAction, props, State } from "@ngrx/store";
import { Books } from "../models/books.model";

export const getBooks = createAction(
    '[Book List] Get Books',
    props<{ books: Array<Books.BookDetail> }>()
)

export const getTotalNumberOfBookCount = createAction(
    '[Book List] Get Total Number of Books',
    props<{ totalNumberOfBooks: number }>()
)