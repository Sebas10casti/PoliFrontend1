import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { generateManyItems, generateItem } from '../mocks/products-mock';
import { generateManyItemsCategory } from '../mocks/products-category-mocks';


@Injectable({
  providedIn: 'root'
})
export class ProductsServiceTsService {

  private myShoppingCart: any[] = [];
  private myCart = new BehaviorSubject<any[]>([]);
  myCart$ = this.myCart.asObservable();

  constructor() { }

  addProduct(product: any[]) {
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
  }

  removeProduct(product: any) {
    const index = this.myShoppingCart.indexOf(product);
    if (index !== -1) {
      this.myShoppingCart.splice(index, 1);
      this.myCart.next(this.myShoppingCart);
    }
  }

  listproducts(){
    return of(generateManyItems());
  }

  getOneItem(){
    return of(generateItem())
  }

  listCategory(){
    return of(generateManyItemsCategory());
  }
}


