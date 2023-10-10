import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ListComponent } from './pages/list/list.component';
import { ListCartComponent } from './pages/list-cart/list-cart.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { AdminProductsComponent } from './pages/admin-products/admin-products.component';
import { loginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'catalogo', pathMatch: 'full' },
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/products', component: AdminProductsComponent, canActivate: [loginGuard]},
  { path: 'catalogo', component: ListComponent },
  { path: 'cart', component: ListCartComponent},
  { path: 'detail', component: DetailProductComponent},
  { path: '**', redirectTo: '/catalogo' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
