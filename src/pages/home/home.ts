import { Component } from '@angular/core';

import { NavController, LoadingController } from 'ionic-angular';

import { Article } from '../../models/article';
import { ArticleWordpress } from '../../providers/article-wordpress';
import { ArticlePage } from '../../pages/article/article';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  articles: Article[];
  constructor(public navCtrl: NavController, public artWordpress: ArticleWordpress, private loadingCtrl: LoadingController) {
  }

  ngOnInit() {
    let loading = this.loadingCtrl.create({content:'Chargement'});
    loading.present(); //nav instance of NavController

    this.loadData()
      .then(data => {
        loading.dismiss();
      });
  }

  doRefresh(refresher) {
    this.loadData()
      .then(data => {
        refresher.complete();
      });
  }

  /**
   * Function who load articles from Worpdress service
   */
  private loadData(): Promise<any> {
    let myCtrl = this;

    return new Promise((resolve, reject) => {
      myCtrl.artWordpress.load().subscribe(articles => {
        articles.forEach(function(art, index) {
          if (art['_embedded']['wp:featuredmedia'] != null) {
            art["source_url"] = art['_embedded']['wp:featuredmedia'][0]['source_url'];
          }
        });
        myCtrl.articles = articles;
        resolve();
      })
    });
  }

  goToArticle(id: number) {
    this.navCtrl.push(ArticlePage, {id});
  }

}
