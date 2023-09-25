import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsServiceTsService } from 'src/app/services/products.service.ts.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  showCart: boolean = false;
  counter: number = 0;
  items: any = [];
  itemsFilters: any = [];

  constructor(private productsServiceTsService:ProductsServiceTsService,  private router: Router){}

  ngOnInit(): void {
    this.productsServiceTsService.listproducts().subscribe({next: (data: any) => {this.items = data; this.itemsFilters = data}})
    this.productsServiceTsService.myCart$.subscribe(products => {
      this.counter = products.length;
    });
  }

  toggleCart(state: boolean){
    this.showCart = state;
  }
}
