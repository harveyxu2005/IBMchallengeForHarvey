import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonInfo } from '../shared/personInfo.model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  loading: Boolean = false;
  newPersonInfo: PersonInfo;

  constructor(public api: ApiService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.loading = true;

    const formValues = Object.assign({}, form.value);

    const personInfo: PersonInfo = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      address: formValues.address,
      company: formValues.company,
      salary: formValues.salary
    };

    this.api.post('contacts', personInfo) 
      .subscribe(data => {
        form.reset();
        this.loading = false;
        this.newPersonInfo = data;
      });
  }

}
