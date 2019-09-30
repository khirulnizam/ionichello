import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  ionViewWillEnter(){
  	//firtly automatically executed
  	//main()
  	alert("Hello");
  }

  //create function to display alert()
  firealert(){
  	alert("Tembak");
  }

}
