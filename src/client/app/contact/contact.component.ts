import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { PersonInfo } from '../shared/personInfo.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() personInfo: PersonInfo;

  @HostBinding('class') columnClass = 'four wide column';

  constructor() { }

  ngOnInit() {
  }

}
