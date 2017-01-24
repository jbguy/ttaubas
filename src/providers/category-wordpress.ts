import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Category } from '../models/category';

/*
  Generated class for the ArticleWordpress provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CategoryWordpress {
  wordpressUrl = 'http://ttaubas.fr/wp-json/wp/v2';

  constructor(public http: Http) { }
    // Load all github users
    load(): Observable<Category[]> {
      return this.http.get(`${this.wordpressUrl}/categories`)
        .map(res => <Category[]>res.json());
    }
    
}
