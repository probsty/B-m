import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit/produit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  productData = [
    {
      price: 14,
      name: 'sssa',
    },
    {
      price: 10,
      name: 'dfd',
    },
    {
      price: 4,
      name: 'ssaaaaa',
    },
  ];
  currency = 'EUR';

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  constructor(private _productService: ProduitService) {}

  ngOnInit(): void {
    this._productService.getAll().subscribe(
      (products: any) => {
        this.productData = products.map((element) => {
          let cover = null;
          if (element.images) {
            cover = element.images[0];
          }
          return {
            ...element,
            cover,
          };
        });
      },
      (err) => {
        console.log('Error while fetching products', err);
      }
    );
  }
}
