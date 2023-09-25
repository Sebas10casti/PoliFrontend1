import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() item: any;
  @Output() addProduct = new EventEmitter();
  @Output() openProduct = new EventEmitter();

  constructor(private router: Router) { }

  addProductFN() {
    this.addProduct.emit(this.item);
  }

  openProductFN(){
    // Aquí defines la ruta a la que quieres navegar
    const productUrl = `/detail`;
    this.router.navigate([productUrl]);
  }
}
