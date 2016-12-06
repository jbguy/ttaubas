import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';

import { Article } from '../../models/article';
import { ArticleWordpress } from '../../providers/article-wordpress';

@Component({
  selector: 'page-article',
  templateUrl: 'article.html'
})
export class ArticlePage {
  article: Article;
  id: number;
  constructor(public navCtrl: NavController, public artWordpress: ArticleWordpress, private navParams: NavParams) {
    this.id = navParams.get('id');
    artWordpress.loadArticle(this.id).subscribe(article => {
      if (article['_embedded']['wp:featuredmedia'] != null) {
        article["source_url"] = article['_embedded']['wp:featuredmedia'][0]['source_url'];
      }
      console.log(article);
      this.article = article;
    });

  }

}
