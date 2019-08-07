import { Component } from '@angular/core';
// For MDB Angular Free
//import { CarouselModule, WavesModule } from 'angular-bootstrap-md'
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private spinner: NgxSpinnerService){

  }
  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 3 seconds */
      this.spinner.hide();
    }, 3000);
  }
}
