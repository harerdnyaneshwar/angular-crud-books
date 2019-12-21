import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/Book';
import {BookService} from '../../services/book.service'
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:Book[];

  constructor(private bookService : BookService) {  }

  ngOnInit() {
    // this.books =[
    //   {
    //     id:1,
    //     title:"science",
    //     author:"Nano",
    //     price:300

    //   },
    //   {
    //     id:2,
    //     title:"technology",
    //     author:"mr 404",
    //     price:400

    //   }
    // ]
     this.bookService.getBooks().subscribe(books =>{
       this.books = books;
     });
  }

}
