import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './page/inicio/inicio.component';
import { ProductosComponent } from './page/productos/productos.component';
import { LoginComponent } from './page/login/login.component';


const routes: Routes = [
  { path:'inicio', component: InicioComponent },
  { path:'productos', component: ProductosComponent },
  { path:'productos/:name', component: ProductosComponent },
  { path:'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: "top"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
