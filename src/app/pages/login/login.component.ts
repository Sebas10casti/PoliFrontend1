import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  name: string = '';
  pwd: string = '';
  isLogued: boolean = false;
  showMessage: boolean = false;

  constructor(private router: Router) { }

  validateUser(){
    this.isLogued = this.name === 'admin';
    this.isLogued = this.pwd === 'admin';
    if(this.isLogued){
      localStorage.setItem('Poli-Test-loguin', 'tokenSuccess')
      this.router.navigate(['/admin/products']);
    }else{
      this.showMessage = true;
      this.name = '';
      this.pwd = '';
    }
  }
}
