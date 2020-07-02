import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from 'src/app/services/produit/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.sass'],
})
export class ProduitComponent implements OnInit {
  id: any;
  product: any;

  constructor(
    private route: ActivatedRoute,
    private _produitService: ProduitService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      this.id = res.id;
      this._produitService.getProduct(this.id).subscribe(
        (product) => {
          this.product = product;
        },
        (err) => {
          console.log('An error occured while fetching product', err);
        }
      );
    });
  }
}
