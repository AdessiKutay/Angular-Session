import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { getBooks, getTotalNumberOfBookCount } from "../actions/books.action";
import { Books } from "../models/books.model";

export interface AppState {
    items: Array<Books.BookDetail>;
    totalItems: number;
}

export const initialState: AppState = { 
    items: [] as Array<Books.BookDetail>,
    totalItems: 0 as number
}

export const booksReducer = createReducer(  
    initialState.items,
    on(getBooks, (state, { books }) => books)
)

export const totalBookCountReducer = createReducer(
    initialState.totalItems,
    on(getTotalNumberOfBookCount, (state, { totalNumberOfBooks }) => totalNumberOfBooks)
)

export const selectTotalItems = (state: AppState) => state.totalItems;
export const selectBooks = (state: AppState) => state.items;

export const bookReducers: ActionReducerMap<AppState> = {
    items: booksReducer,
    totalItems: totalBookCountReducer
}