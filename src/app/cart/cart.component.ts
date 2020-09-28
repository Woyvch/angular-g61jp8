import { Component, OnInit } from '@angular/core';
// Import the FormBuilder service from the @angular/forms package.
import { FormBuilder } from '@angular/forms';
// Use the cart service to display the products in the cart.
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  items;
  // Define the checkoutForm property to store the form model.
  checkoutForm;

  constructor(
    // Inject the CartService so that the cart component can use it.
    private cartService: CartService,
    // Inject the FormBuilder service.
    private formBuilder: FormBuilder,
  ) { 
    // set the checkoutForm property with a form model containing name and address fields, using the FormBuilder group() method.
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
    // Set the items using the cart service's getItems() method.
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }

}