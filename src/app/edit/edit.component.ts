import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Article } from '../article';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'blog-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})



export class EditComponent implements OnInit {

  article: Article;
  idCount: number = 0;
  @Output() onCreate: EventEmitter<Article>;
  @Output() onUpdate: EventEmitter<Article>;
  private model: Article;

  constructor() {
    this.model = new Article();
    this.model.id = ++this.idCount;
    this.onCreate = new EventEmitter;
    this.onUpdate = new EventEmitter;
  }

  ngOnInit() {
    if (this.article){
      this.model = this.article;
    }
  }

  submit(form: NgForm){
    let data: Article = JSON.parse(JSON.stringify(this.model)); //Permet de créer une nouvelle instance d'article.
    if(this.article) {
      this.onUpdate.emit(data);
    } else {      
      this.onCreate.emit(data);
    }
  } 

}
