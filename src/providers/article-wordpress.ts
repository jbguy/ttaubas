import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Article } from '../models/article';

/*
  Generated class for the ArticleWordpress provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ArticleWordpress {
  wordpressUrl = 'http://ttaubas.fr/wp-json/wp/v2';

  constructor(public http: Http) { }
    // Load all github users
    load(): Observable<Article[]> {
      return this.http.get(`${this.wordpressUrl}/posts?_embed`)
        .map(res => <Article[]>res.json());
    }
    loadArticle(id): Observable<Article> {
      return this.http.get(`${this.wordpressUrl}/posts/` + id + `?_embed`)
        .map(res => <Article>res.json());
    }
}
