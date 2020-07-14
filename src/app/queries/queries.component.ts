import { Component, OnInit } from '@angular/core';
import { AddQueries } from '../models/queries/queries.model';
import { QueriesService } from '../services/queries.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.scss']
})
export class QueriesComponent implements OnInit {
  queries = new AddQueries();
  queriesForm: FormGroup;
  submitted = false;
  // tslint:disable-next-line: ban-types
  showSuccessMessage: Boolean = false;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  phoneNumberPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  dialogRef: any;
  constructor(private readonly queriesService: QueriesService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.queriesForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      phoneNumber: ['', [Validators.required,
      Validators.pattern(this.phoneNumberPattern),]
      ],
      description: ['', [Validators.required, Validators.minLength(4)]],
    });
  }
  get f() { return this.queriesForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.queriesForm.invalid) {
      return;
    }
    this.queriesForm.reset();
  }
  createQueries() {
    if (this.queriesForm.valid) {
      this.queriesService.createQueries(this.queriesForm.value).then((data) => {
        this.showSuccessMessage = true;
      });
    }
  }
}
