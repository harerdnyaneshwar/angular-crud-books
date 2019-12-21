import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models/Book';
import { BookService} from '../../services/book.service';
@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  @Input() book :Book[];
  constructor( private bookService : BookService) { }

  ngOnInit() {
  }
  //dynamic classes //41.00
  setClasses(){
    let classes = {
      book: true,
    }
    return classes;

  }
  onToggle(book){
    console.log("---",book.title)

    // toggle on server
    this.bookService.toggleCompleted(book).subscribe(book => {
      console.log("togg completed on server", book);
    })

  }
  onDelete(book){
    console.log("-Delete-",book.title)

  }

}
