import { Component, OnInit } from '@angular/core';
import {AuthProvider} from 'ngx-auth-firebaseui';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  providers = AuthProvider; 
  constructor( private router: Router) { }

  ngOnInit() {
  }
  printUser(event) {
    console.log('Este es el printUser', event);
    this.router.navigate(['/inicio'])
  }

  printError(event) {
    console.error('Este es el printError',event);
  }
}
