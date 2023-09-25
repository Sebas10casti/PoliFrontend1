import { Component } from '@angular/core';
import { Product } from 'src/app/mocks/products-mock';
import { ProductsServiceTsService } from 'src/app/services/products.service.ts.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent {
  product: Product = {
    name: '',
    category: '',
    image: '',
    adjetive: '',
    description: '',
    price: 0
  };

  constructor(private productsServiceTsService:ProductsServiceTsService) { }

  ngOnInit(): void {
    this.productsServiceTsService.getOneItem().subscribe(
      (product: any) => {
        this.product = product;
      },
      error => {
        console.error('Error al obtener product:', error);
      }
    );
  }
}
