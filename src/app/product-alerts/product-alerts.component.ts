import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../products';
import { MyEvsntService } from '../myEvent.service';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  @Input() product!: Product;
  @Output() notify = new EventEmitter();
  myEvent : MyEvsntService;

  constructor(myEvent: MyEvsntService) {
    this.myEvent = myEvent;
  }

  onClick() {
    this.myEvent.emitter.emit("a");
  }
}
