import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeInfosProvider } from '../../providers/home-infos/home-infos';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[HomeInfosProvider] 
})
export class HomePage {

  //News: any;
  AllNews: any;
  AllNewsUrl: 'http://localhost:53235/ImagesDatas/HomeSlideImage/';
  constructor(public navCtrl: NavController, public news: HomeInfosProvider, public http: Http) {
 
    this.http.get("http://localhost:57659/api/HomeInfosDatas/Get")
    .map(res => res.json())
    .subscribe(data => {
      this.AllNews = data
    },(error) => {
      console.log(error.json());
    });


  }

 /* GetActualNews(){
    this.news.FetchHomeNews()
    .then(data =>{
      this.ListNews = data;
    }) 
  } */
 
 
  

   
 

}
