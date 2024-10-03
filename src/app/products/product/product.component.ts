import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Product } from '../types/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id'])
        this.getProduct(params['id']);
    });
    this.route.queryParams.subscribe(params => {
      if (params['id'])
        this.getProduct(params['id']);
    })
  }

  getProduct(id: string) {
    this.productsService.getProduct(id).subscribe(resp => {
      this.product = resp as Product;
    });
  }

}
