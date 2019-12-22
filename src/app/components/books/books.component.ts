import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/Book';
import {BookService} from '../../services/book.service'
import { toUnicode } from 'punycode';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:Book[];

  constructor(private bookService : BookService) {  }

  ngOnInit() {
   
     this.bookService.getBooks().subscribe(books =>{
       this.books = books;
     });
  }

  addBookData(book:Book){

    //server request
    this.bookService.addBook(book).subscribe(todo => {
      console.log(book)
      this.books.push(book)
    });
  }

  deleteData(book:Book){
    console.log("In parent deleting this ",book );
    this.books = this.books.filter(t =>t.id!==book.id);
  }
  


}
