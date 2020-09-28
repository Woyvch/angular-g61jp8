import { Component, OnInit } from '@angular/core';
// Use the cart service to display the products in the cart.
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  items;

  constructor(
    // Inject the CartService so that the cart component can use it.
    private cartService: CartService
  ) { }

  ngOnInit() {
    // Set the items using the cart service's getItems() method.
    this.items = this.cartService.getItems();
  }

}