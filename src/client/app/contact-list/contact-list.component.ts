import { Component, OnInit } from '@angular/core';
import { PersonInfo } from '../shared/personInfo.model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  personInfos: PersonInfo[];

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.get('contacts')
      .subscribe(data => {
        this.personInfos = data
      }); 
  }

}
