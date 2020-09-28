import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  // Define a shippingCosts property.
  shippingCosts;

  constructor(
    // Inject the cart service.
    private cartService: CartService
  ) { }

  ngOnInit() {
    // Set the shippingCosts property using the getShippingPrices() method.
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}