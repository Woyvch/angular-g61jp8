import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  // Define an items property to store the array of the current products in the cart.
  items = [];

  constructor(
    private http: HttpClient
  ) { }
  // Define methods to add items to the cart, return cart items, and clear the cart items.
  addToCart(product) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
  // Define a new getShippingPrices() method that uses the HttpClient get() method to retrieve the shipping data.
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
  
}