import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from './services/products.service';
import { Product } from './types/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private router: Router,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((resp: any) => {
      this.products = resp.products;
    });
    // fetch("https://dummyjson.com/products").then(resp => resp.json()).then(resp => {
    //   console.log("Response from fetch", resp);
    // });
  }

  navigateToProduct(id: number) {
    this.router.navigate(['/', 'product'], { queryParams: { id: id } });
  }

}





