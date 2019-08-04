import { Component, OnInit } from '@angular/core';
import { IconsModule } from 'angular-bootstrap-md'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public logo:string
  constructor() {
    this.logo= 'assets/img/logo.png'
   }

  ngOnInit() {
  }

}
