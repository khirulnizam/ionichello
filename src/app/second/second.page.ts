import { Component, OnInit } from '@angular/core';
import { CalculateService } from '../service/calculate.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {
	public totaltambah:any;
	public totaltolak:any;

  constructor(
  	public calc:CalculateService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
  	this.totaltambah = this.calc.add();
  	this.totaltolak = this.calc.subtract();

  }

}
