import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyEvsntService {

  emitter = new EventEmitter<string>();
  
}