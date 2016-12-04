import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  icons: string[];
  articles: Array<{title: string, text: string, icon: string}>;
  constructor(public navCtrl: NavController) {

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.articles = [];
    
    for(let i = 1; i < 11; i++) {
      this.articles.push({
        title: 'Item ' + i,
        text: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

}
