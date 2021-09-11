import { mergeNsAndName } from '@angular/compiler/src/ml_parser/tags';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {Output, EventEmitter} from '@angular/core';
import { Product } from '../products';
import { from } from 'rxjs';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {
 
  @Input() product! : Product;
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
