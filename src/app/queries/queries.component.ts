import { Component, OnInit } from '@angular/core';
import { AddQueriesModel } from '../models/queries/queries.model';
import { QueriesService } from '../services/queries.service';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.scss']
})
export class QueriesComponent implements OnInit {

  public queries = new AddQueriesModel();
  constructor(private readonly queriesService: QueriesService) {}

  ngOnInit(): void  { }
  public onSubmitButtonClicked(): void {
    this.queries.contactusId = 0;
    this.queriesService.createQueries(this.queries).subscribe((data) => {
      console.log('Add');
    });
  }
}
