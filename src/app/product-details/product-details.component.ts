import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Imports the products array from ../products.
import { products } from '../products';
// Import the cart service.
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  // Define the product property.
  product;
  // Define the addToCart() method, which adds the current product to the cart.
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  constructor(
    // Inject the ActivatedRoute and the cart service into the constructor by adding it as an argument.
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    // Subscribe to route parameters and fetch the product based on the productId.
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

}