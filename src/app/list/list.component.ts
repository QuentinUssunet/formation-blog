import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'blog-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() articles;
  @Output() onEdit : EventEmitter<number>;
  @Output() onDelete : EventEmitter<number>;

  constructor() {
    this.onDelete = new EventEmitter();
    this.onEdit = new EventEmitter();
  }

  ngOnInit() {
  }
  
  delete(article: Article) {
    if(article && article.id != null) {
      this.onDelete.emit(article.id);
    }
  }

  edit(article: Article) {
    if(article && article.id != null) {
      this.onEdit.emit(article.id);
    }
  }
}
