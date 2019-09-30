import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {
	//define number obj
	public numberobj={
		num1:null,
		num2:null
	}
	add(){//tambah
		return Number(this.numberobj.num1)+Number(this.numberobj.num2);//cast to number
	}//end add
	subtract(){//tolak
		return Number(this.numberobj.num1)-Number(this.numberobj.num2);
	}//end add
	

  constructor() { }
}
