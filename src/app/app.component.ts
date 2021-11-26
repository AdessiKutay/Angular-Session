import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatestWith, debounceTime, fromEvent, map, mergeAll, mergeMap, Observable, Observer, switchMap } from 'rxjs';
import { fromFetch } from 'rxjs/fetch'
import { Books } from './models/books.model';
import { selectBooks } from './reducers/books.reducer';
import { BooksService } from './services/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {

  title = 'book';

  @ViewChild('bookNameQuery', { static: false}) bookName!: ElementRef;
  @ViewChild('select', { static: false}) select!: ElementRef;
  @ViewChild('button', { static: false}) button!: ElementRef;

  books$!: Observable<Array<Books.BookDetail>>;

  booksRequest: Books.BookRequest = {
    orderBy: 'relevance',
    maxResults: '5',
    q: 'Oliver'
  }

  time$ = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  })

  query!: string;
  maxResults!: string;

  constructor(private store: Store, private booksService: BooksService) {}

  ngOnInit(): void {

    this.books$ = this.store.select(selectBooks);

    // this.books$.subscribe(data => {
    //   console.log(data)
    // })
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  
  ngAfterViewInit(): void {
    const inputElement = document.getElementById('bookNameQuery');
    // const selectElement = document.querySelector('select');
    // const buttonElement = document.querySelector('button');

    const keyup$ =  fromEvent(this.bookName.nativeElement, "keyup")
    keyup$.pipe(
      map((i: any) => i.currentTarget.value),
      // debounceTime(300)
    )
    // .subscribe(data => {
    //   this.booksRequest.q = encodeURIComponent(data);
    //   console.log(this.booksRequest);
    // })

    const selectChange$ = fromEvent(this.select.nativeElement, "change")
    selectChange$.pipe(
      map((i: any) => i.currentTarget.value)
    )
      // .subscribe(data => {
      //   this.booksRequest.maxResults = data;
      // })

    // fromEvent(this.button.nativeElement, "click")
    //   .pipe(
    //     switchMap(this.getBooks)
    //   )
    //   .subscribe(data => {
    //     console.log(data);
    //   })

    // keyup$.pipe(
    //   switchMap(this.getBooks2),
    //   combineLatestWith(selectChange$)
    // )
  }

  getBooks() {

    // const randomArray = [
    //   'Oliver',
    //   'Game of Thrones',
    //   'deneme'
    // ];

    // const bookQuery = encodeURIComponent(randomArray[Math.round(Math.random() * 2)]);

    // return fromFetch(
    //   `https://www.googleapis.com/books/v1/volumes?orderBy=relevance&maxResults=5&q=${bookQuery}`
    // ).pipe(
    //   mergeMap(res => res.json())
    // );
  }

}
