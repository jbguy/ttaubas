import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Article } from '../../models/article';
import { ArticleWordpress } from '../../providers/article-wordpress';
import { ArticlePage } from '../../pages/article/article';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  articles: Article[];
  constructor(public navCtrl: NavController, public artWordpress: ArticleWordpress) {

     artWordpress.load().subscribe(articles => {
      articles.forEach(function(art, index) {
        if (art['_embedded']['wp:featuredmedia'] != null) {
          art["source_url"] = art['_embedded']['wp:featuredmedia'][0]['source_url'];
        }
      });
      this.articles = articles;
    })
    
  }

  doRefresh(refresher) {
    this.artWordpress.load().subscribe(articles => {
      articles.forEach(function(art, index) {
        if (art['_embedded']['wp:featuredmedia'] != null) {
          art["source_url"] = art['_embedded']['wp:featuredmedia'][0]['source_url'];
        }
      });
      this.articles = articles;
      refresher.complete();
    })

  }

  goToArticle(id: number) {
    this.navCtrl.push(ArticlePage, {id});
  }

}
