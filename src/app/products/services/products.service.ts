import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl = environment.baseUrl;

  // QA - QA  qaportal.store.com
  // Release portal - Live people

  constructor(
    private http: HttpClient,
  ) { }

  getProducts() {
    return this.http.get(`${this.baseUrl}/products`);
  }

  getProduct(id: string) {
    return this.http.get(`${this.baseUrl}/products/${id}`);
  }

}
