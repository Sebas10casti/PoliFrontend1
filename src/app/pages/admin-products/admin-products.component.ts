import { Component } from '@angular/core';

declare const $: any;
export interface Producto {
  id: number;
  nombre: string;
  unidades: number;
  precio: number;
  descripcionCorta: string;
  descuento: number;
}

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})


export class AdminProductsComponent {

  listaDeProductos: Producto[] = [
    { id: 1, nombre: 'Producto 1', unidades: 100, precio: 5000, descripcionCorta: 'Descripción 1...', descuento: 10 },
    { id: 2, nombre: 'Producto 2', unidades: 150, precio: 7500, descripcionCorta: 'Descripción 2...', descuento: 15 },
    { id: 3, nombre: 'Producto 3', unidades: 200, precio: 10000, descripcionCorta: 'Descripción 3...', descuento: 20 },
    { id: 4, nombre: 'Producto 4', unidades: 120, precio: 6000, descripcionCorta: 'Descripción 4...', descuento: 8 },
    { id: 5, nombre: 'Producto 5', unidades: 180, precio: 9000, descripcionCorta: 'Descripción 5...', descuento: 12 },
    { id: 6, nombre: 'Producto 6', unidades: 250, precio: 12000, descripcionCorta: 'Descripción 6...', descuento: 25 },
    { id: 7, nombre: 'Producto 7', unidades: 300, precio: 13500, descripcionCorta: 'Descripción 7...', descuento: 18 },
    { id: 8, nombre: 'Producto 8', unidades: 80, precio: 4000, descripcionCorta: 'Descripción 8...', descuento: 7 },
    { id: 9, nombre: 'Producto 9', unidades: 450, precio: 18000, descripcionCorta: 'Descripción 9...', descuento: 22 },
    { id: 10, nombre: 'Producto 10', unidades: 150, precio: 7000, descripcionCorta: 'Descripción 10...', descuento: 13 },
    { id: 11, nombre: 'Producto 11', unidades: 90, precio: 4500, descripcionCorta: 'Descripción 11...', descuento: 9 },
    { id: 12, nombre: 'Producto 12', unidades: 280, precio: 11200, descripcionCorta: 'Descripción 12...', descuento: 19 },
    { id: 13, nombre: 'Producto 13', unidades: 320, precio: 12800, descripcionCorta: 'Descripción 13...', descuento: 27 },
    { id: 14, nombre: 'Producto 14', unidades: 200, precio: 9500, descripcionCorta: 'Descripción 14...', descuento: 14 },
    { id: 15, nombre: 'Producto 15', unidades: 180, precio: 9000, descripcionCorta: 'Descripción 15...', descuento: 11 },
    { id: 16, nombre: 'Producto 16', unidades: 390, precio: 15600, descripcionCorta: 'Descripción 16...', descuento: 16 },
    { id: 17, nombre: 'Producto 17', unidades: 50, precio: 2500, descripcionCorta: 'Descripción 17...', descuento: 6 },
    { id: 18, nombre: 'Producto 18', unidades: 600, precio: 24000, descripcionCorta: 'Descripción 18...', descuento: 21 },
    { id: 19, nombre: 'Producto 19', unidades: 120, precio: 6000, descripcionCorta: 'Descripción 19...', descuento: 10 },
    { id: 20, nombre: 'Producto 20', unidades: 180, precio: 9000, descripcionCorta: 'Descripción 20...', descuento: 17 },
    { id: 21, nombre: 'Producto 21', unidades: 400, precio: 16000, descripcionCorta: 'Descripción 21...', descuento: 24 },
    { id: 22, nombre: 'Producto 22', unidades: 200, precio: 10000, descripcionCorta: 'Descripción 22...', descuento: 12 },
    { id: 23, nombre: 'Producto 23', unidades: 80, precio: 4000, descripcionCorta: 'Descripción 23...', descuento: 8 },
    { id: 24, nombre: 'Producto 24', unidades: 150, precio: 7500, descripcionCorta: 'Descripción 24...', descuento: 14 },
    { id: 25, nombre: 'Producto 25', unidades: 220, precio: 11000, descripcionCorta: 'Descripción 25...', descuento: 18 },
    { id: 26, nombre: 'Producto 26', unidades: 130, precio: 6500, descripcionCorta: 'Descripción 26...', descuento: 9 },
    { id: 27, nombre: 'Producto 27', unidades: 180, precio: 9000, descripcionCorta: 'Descripción 27...', descuento: 15 }
  ]
}
