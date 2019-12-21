import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Book } from '../models/Book';
import { Observable} from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class BookService {
  booksUrl:string = 'https://jsonplaceholder.typicode.com/posts';
  booksLimit:string = '?_limit=5';
  constructor(private http:HttpClient) { }

  getBooks():Observable<Book[]>{
    return this.http.get<Book[]>(`${this.booksUrl}${this.booksLimit}`)
    }

  //   return [
  //   {
  //     id:1,
  //     title:"Mentorication",
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
  // toggleCompleted(){


  // }
  toggleCompleted(book:Book):Observable<any>{
    const url = `${this.booksUrl}/${book.id}`
    return this.http.put(url,book, httpOptions)
    }
  }
