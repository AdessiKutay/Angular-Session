export namespace Books {

    export interface BooksResponse {
        totalItems: number;
        items: Array<BookDetail>;
    }

    export interface BookDetail {
        id: string;
        volumeInfo: {
            title: string;
            authors: Array<string>;
        }
    }

    export const booksRequest: Books.BookRequest = {
        orderBy: 'relevance',
        maxResults: '5',
        q: 'Oliver'
    }

    export interface BookRequest {
        maxResults: string;
        orderBy: string;
        q: string;
    }
}