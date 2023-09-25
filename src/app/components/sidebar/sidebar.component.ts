import { Component } from '@angular/core';
import { ProductsServiceTsService } from 'src/app/services/products.service.ts.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  categories: any[] = [];

  constructor(private productsServiceTsService:ProductsServiceTsService) { }

  ngOnInit(): void {
    this.productsServiceTsService.listCategory().subscribe(
      (categories: any[]) => {
        this.categories = categories;
      },
      error => {
        console.error('Error al obtener categorías:', error);
      }
    );
  }

}
