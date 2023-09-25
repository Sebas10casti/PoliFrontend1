import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablerIconsModule } from 'angular-tabler-icons';
import { IconCamera, IconHeart, IconBrandGithub } from 'angular-tabler-icons/icons';
import { LoginComponent } from './pages/login/login.component';
import { ListComponent } from './pages/list/list.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { ListCartComponent } from './pages/list-cart/list-cart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ClientComponent } from './layaout/client/client.component';
import { ProductComponent } from './components/product/product.component';


const icons = {
  IconCamera,
  IconHeart,
  IconBrandGithub
};

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    DetailProductComponent,
    ProductComponent,
    ListCartComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    ClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TablerIconsModule.pick(icons)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    TablerIconsModule
  ]
})
export class AppModule { }
