import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  @Output() addBookEvent: EventEmitter<any> = new EventEmitter();

  title:string;

  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    const book = {
      title:this.title,

    }
    this.addBookEvent.emit(book);
  }

}
