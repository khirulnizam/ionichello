import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
	namauser:any;

  constructor(
  	public route:ActivatedRoute
  	) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
  	this.namauser=this.route.snapshot.params.name;
  	console.log(this.namauser);
  }

}
