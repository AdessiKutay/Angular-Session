import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { getBooks } from "../actions/books.action";
import { Books } from "../models/books.model";
import { BooksService } from "../services/books.service";

@Injectable({
    providedIn: 'root'
})
export class BooksResolver implements Resolve<any> {

    constructor(private store: Store, private booksService: BooksService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        this.booksService.getBooks(Books.booksRequest)
            .subscribe((books: Array<Books.BookDetail>) => {
                this.store.dispatch(getBooks( { books } ))
            })
    }
    
}