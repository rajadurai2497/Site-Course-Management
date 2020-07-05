import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-features',
  templateUrl: './home-features.component.html',
  styleUrls: ['./home-features.component.scss']
})
export class HomeFeaturesComponent implements OnInit {

  constructor() { }
  public imagesUrl;
  ngOnInit() {
    this.imagesUrl = ['assets/img/ill/img2-01.png', 'assets/img/ill/img88-01.png', 'assets/img/ill/hme_bg-01.png'];
  }

}
