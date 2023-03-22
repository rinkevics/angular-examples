import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent {
  ship_color = 'yellow';
  width = '150px';
  userName = '1234';

  favoriteColorControl = new FormControl('', [Validators.required]);
  
  shippingCosts!: Observable<{ type: string, price: number }[]>;
  
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.shippingCosts =  this.cartService.getShippingPrices();
  }

  share () {
    let value = this.favoriteColorControl.value;
    this.favoriteColorControl.setValue("1" + value + "1");
  }


}
