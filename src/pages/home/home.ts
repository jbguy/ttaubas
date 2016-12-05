import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Article } from '../../models/article';
import { ArticleWordpress } from '../../providers/article-wordpress';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  articles: Article[];
  constructor(public navCtrl: NavController, public artWordpress: ArticleWordpress) {

     artWordpress.load().subscribe(articles => {
      this.articles = articles;
      console.log(this.articles);
    })

    
  }

}
