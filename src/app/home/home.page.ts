import { Component } from '@angular/core';
//add NavController API
import {NavController, ModalController} from '@ionic/angular';
import {ModalPage} from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
  	//rename NavController object
  	public nav: NavController,
  	public mc: ModalController
  	) {}//end constructor

  //navigate gotocontact
  gotocontact(){
  	this.nav.navigateForward('contact');
  }

  //opening modal
  async openmodal(){
  	let mymc=await this.mc.create({//create modal
  		component:ModalPage
  	});
  	return await mymc.present();//show
  }

  ionViewWillEnter(){
  	//firtly automatically executed
  	//main()
  	//alert("Hello");
  }


  //create function to display alert()
  firealert(){
  	alert("Tembak");
  }

}
