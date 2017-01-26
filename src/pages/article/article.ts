import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController  } from 'ionic-angular';

import { Article } from '../../models/article';
import { ArticleWordpress } from '../../providers/article-wordpress';

import { Category } from '../../models/category';
import { CategoryWordpress } from '../../providers/category-wordpress';

@Component({
  selector: 'page-article',
  templateUrl: 'article.html'
})
export class ArticlePage {
  article: Article;
  id: number;

  loaded: boolean = false;

  constructor(public navCtrl: NavController, public artWordpress: ArticleWordpress, private navParams: NavParams, 
  private catWordpress: CategoryWordpress, private loadingCtrl: LoadingController) {
  }

  ngOnInit() {
    let loading = this.loadingCtrl.create({content:'Chargement'});
    loading.present(); //nav instance of NavController


    this.id = this.navParams.get('id');
    this.artWordpress.loadArticle(this.id)
      .subscribe(article => {
        if (article['_embedded']['wp:featuredmedia'] != null) {
          article["source_url"] = article['_embedded']['wp:featuredmedia'][0]['source_url'];
        }
        console.log(article);
        article["categoriesName"] = [];
        article.categories.forEach(category => {
          this.catWordpress.loadCategory(category)
            .subscribe(data => {
              article["categoriesName"].push(data["name"]);
              loading.dismiss();
              this.loaded = true;
            })
        });
        this.article = article;
    });
  }

  private onClickBack() {
    this.navCtrl.pop();
  }

}
