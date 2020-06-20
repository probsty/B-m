import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;

  @Input() index: any;

  @Input() currency: string;

  //   @Output() addToCart: EventEmitter<any> = new EventEmitter();

  //   @Output() addToWishlist: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log('Product = ', this.product);
  }
}
