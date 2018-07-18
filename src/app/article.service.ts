import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private subject: BehaviorSubject<Array<Article>>;

  constructor() {
    this.subject = new BehaviorSubject(new Array());
  }

  get articles(): Observable<Array<Article>> {
    return this.subject.asObservable();
  }

  loadMock() {
    let mock = [
      {
        id: 0, 
        title: 'article n°1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac lorem et lacus consequat accumsan accumsan nec odio. Suspendisse lacinia aliquam lectus, in fermentum nulla aliquet sed. Suspendisse ac ullamcorper sapien. Nunc eget rutrum lacus. Proin condimentum dolor nec elit faucibus ultricies. Proin in fermentum sapien, sed dignissim turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla pellentesque felis, ut consequat magna feugiat at.'
      },
      {
        id: 1, 
        title: 'article n°2',
        description: 'Curabitur finibus, arcu sit amet faucibus tempus, ex ipsum porta sem, at convallis tellus magna at turpis. Donec pretium fermentum metus, nec pellentesque dui volutpat a. Quisque eget quam et leo cursus pulvinar convallis quis risus. Sed viverra feugiat sapien in dictum. Etiam eget mauris lectus. Nulla finibus, quam vitae luctus tempor, mauris massa facilisis lectus, quis lobortis odio elit eget arcu. Maecenas sodales lorem at fermentum suscipit. Fusce tincidunt pharetra nisl id commodo. Praesent ultricies sapien in lacus lacinia mattis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut laoreet urna nulla, non feugiat libero mattis ornare. Donec consequat risus purus.'
      },
      {
        id: 2, 
        title: 'article n°3',
        description: 'Maecenas id aliquam elit. Aenean fermentum dui auctor lacus porta, a pretium risus luctus. Vestibulum scelerisque, eros non imperdiet tincidunt, elit dolor pellentesque urna, eget accumsan nisl turpis ac neque. Praesent vitae aliquam diam. Donec lobortis pharetra purus. Nunc eget bibendum purus. Cras tempus pellentesque neque a tincidunt. Suspendisse potenti. Nunc cursus elit turpis. Quisque pellentesque porttitor erat id ullamcorper. Aliquam fermentum aliquet bibendum. In placerat nulla et feugiat consequat.'
      }
    ];
    this.subject.next(mock);
  }
}
