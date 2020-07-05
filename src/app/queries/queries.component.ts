import { Component, OnInit } from '@angular/core';
import { AddQueriesModel } from '../models/queries/queries.model';
import { QueriesService } from '../services/queries.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.scss']
})
export class QueriesComponent implements OnInit {

  public queries = new AddQueriesModel();
  addQueries: any;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  phoneNumberPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  constructor(private readonly queriesService: QueriesService) {}

  ngOnInit(): void  {
    this.addQueries = new FormGroup({
      name: new FormControl(this.queries.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl(this.queries.email, [
        Validators.required,
        Validators.pattern(this.emailPattern),
      ]),
      phoneNumber: new FormControl(this.queries. phoneNumber, [
        Validators.required,
        Validators.pattern(this. phoneNumberPattern),
      ]),
      alterEgo: new FormControl(this.queries.alterEgo),
      power: new FormControl(this.queries.power, Validators.required)
    });
   }
   get fullName() { return this.queries.get('fullName'); }
  get power() { return this.queries.get('power'); }
  get emailId() { return this.queries.get('emailId'); }
  get phoneNumber() { return this.queries.get('phoneNumber'); }

  public onSubmitButtonClicked(): void {
    this.queries.contactusId = 0;
    this.queriesService.createQueries(this.queries).subscribe((data) => {
      alert('Registered Successfully');
      console.log('Add');
    });
  }
}
