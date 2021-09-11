import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any = [];

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  ngOnInit() {
    this.items = this.cartService.getItems();
    console.log(this.items);
  }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
