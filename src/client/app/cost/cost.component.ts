import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { PersonInfo } from '../shared/personInfo.model';
import { CompanyCost } from '../shared/companyCost.model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.scss']
})
export class CostComponent implements OnInit {

  companyCosts: CompanyCost[];

  constructor(public api: ApiService) {
   }

  ngOnInit() {
    this.api.get('contacts')
      .subscribe(data => {
        this.calculateCosts(data);
      });
  }

  calculateCosts(persons: PersonInfo[]){
    this.companyCosts=[];
    for(let person of persons){
      let companyCost = this.companyCosts.find(c=>c.companyName==person.company);

      if(companyCost){
        companyCost.cost = Number(companyCost.cost) + Number(person.salary);
      }else{
        this.companyCosts.push({companyName:person.company, cost:person.salary});
      }

    }
  }

}