import { Component } from '@angular/core';
import { Article } from './article';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  articles: Array<Article>;
  showList: boolean;
  editArticle: Article;

  constructor(private articleService: ArticleService) {
    this.title = "Welcome to THE BLOG !!!";
    this.articles = new Array();
    this.showList = true;
  }

  ngOnInit() {
    this.articleService.loadMock();
    this.articleService.articles.subscribe((result) => this.articles = result);
  }

  handleCreate(article:Article) {
    this.articles.push(article);
    this.showList = true;
  }

  handleUpdate(article: Article) {
    this.updateList(article.id, article);
    this.editArticle = undefined;
    this.showList = true;
  }

  deleteArticle(id: number) {
    this.updateList(id);
  }

  showArticle(id: number) {
    this.editArticle = this.articles.find((a) => a.id === id);
    this.showList = false;
  }

  private updateList(id: number, article?: Article) {
    let index = this.articles.findIndex((a) => a.id === id);
    if (index >= 0){
      if (article) {
        this.articles.splice(index, 1, article);
      } else {
        this.articles.splice(index, 1);
      }
    }
  }
}

