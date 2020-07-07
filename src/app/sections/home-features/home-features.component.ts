import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-features',
  templateUrl: './home-features.component.html',
  styleUrls: ['./home-features.component.scss']
})
export class HomeFeaturesComponent implements OnInit {

  constructor() { }
  public imagesUrl;
  ngOnInit() {
    this.imagesUrl = [
      'assets/img/brand/img22.png',
     'assets/img/brand/img33-01.png',
      'assets/img/brand/29.png',
      'assets/img/brand/img2-01.png'
    ];
  }
  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
     
    },
    nav: true
  }
  
}
