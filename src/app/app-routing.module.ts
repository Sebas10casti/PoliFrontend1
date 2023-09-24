import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ListComponent } from './pages/list/list.component';
import { ListCartComponent } from './pages/list-cart/list-cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'catalogo', pathMatch: 'full' },
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/gestor-archivos', component: LoginComponent },
  { path: 'catalogo', component: ListComponent },
  { path: 'cart', component: ListCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
