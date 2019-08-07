import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/*MDB*/
import { CarouselModule, WavesModule, NavbarModule, IconsModule, CardsModule, ButtonsModule } from 'angular-bootstrap-md';

/* Firebase*/
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
/* NGX-firebase*/
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

/* Environment*/
import { environment } from '../environments/environment'

/* NgxSpinnerModule libreria de carga */
import { NgxSpinnerModule } from "ngx-spinner";
/* Componentes*/
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InicioComponent } from './page/inicio/inicio.component';
import { ProductosComponent } from './page/productos/productos.component';
import { LoginComponent } from './page/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ProductosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(), 
    WavesModule.forRoot(),
    NavbarModule,
    IconsModule,
    CardsModule,
    ButtonsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    NgxSpinnerModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebase)
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
