import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HomeInfosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomeInfosProvider {

  private SlideData: any;
  constructor(public http: Http) { 
    this.http = http; 

  }

   FetchHomeNews(){

    if(this.SlideData){
      return Promise.resolve(this.SlideData);
    }

    return new Promise(resolve => { 

      //this.http.get('http://localhost:57659/api/HomeInfosDatas/Get')
      this.http.get('http://localhost:57659/api/HomeInfosDatas/Get')
      .subscribe(data =>{
        console.log(data);
      });

    })
  } 


}
