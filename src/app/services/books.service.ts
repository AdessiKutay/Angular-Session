// https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=game%20of%20thrones
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { map, Observable } from "rxjs";
import { Books } from "../models/books.model";

@Injectable({
    providedIn: 'root'
})
export class BooksService {

    constructor(protected http: HttpClient, protected store: Store) {}

    getBooksResponse(bookRequest: Books.BookRequest): Observable<Books.BooksResponse> {

        const url = `https://www.googleapis.com/books/v1/volumes?orderBy=relevance&maxResults=${bookRequest.maxResults}&q=${bookRequest.q}`

        return this.http.get<Books.BooksResponse>(url);
    }


    getBooks(bookRequest: Books.BookRequest): Observable<Array<Books.BookDetail>> {

        const url = `https://www.googleapis.com/books/v1/volumes?orderBy=relevance&maxResults=${bookRequest.maxResults}&q=${bookRequest.q}`

        return this.http.get<Books.BooksResponse>(url)
            .pipe(
                map((booksResponse) => booksResponse.items)
            )
    }
}