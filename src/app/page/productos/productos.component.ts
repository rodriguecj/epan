import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../shared/services/productos.service';
  


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  public src_img = 'assets/img/productos/';
  public mostrarCategory = false
  public productos: any =[];
  public masa_madre:any = [
    {
      title: "Baguette Masa Madre",
      price: 1750 ,
      img: `${this.src_img}baguette_masa_madre.png`
    },
    {
      title: "Ciabatta Masa Madre",
      price: 1750 ,
      img: `${this.src_img}ciabatta_masa_madre.png`
    },
    {
      title: "Pan artesano integral de Masa Madre",
      price: 1750 ,
      img: `${this.src_img}pan_artesano_integral_de_masa_madre.png`
    }
  ]
  public marraquetas:any = [
    {
      title: "Marraquetas",
      price: 1750 ,
      img: `${this.src_img}marraquetas.png`
    }
  ]
  constructor( public _params:ActivatedRoute, public productServices: ProductosService) {
    /* this.productos.push(...this.marraquetas);
    this.productos.push(...this.masa_madre) */
    this._params.params.subscribe(params=>{
      /* console.log("Este es el parametro: ", params) */

      if(params.name == "pan_de_masa_madre"){
        this.cargarMasaMadre()
      }else if(params.name == "marraquetas"){
        this.cargarMaraquetas() 
      }else{
        this.mostrarCategory = true
        this.cargarTodo()
      }
    })
    /* console.log('este es productos', this.productos); */
    this.productServices.items.subscribe(response=>{
      /* console.log('este es el response: ',response) */
    })
   }

  ngOnInit() {
  }
  cargarMaraquetas(){
    this.productos = [];
    this.productos.push(...this.marraquetas);
    /* console.log('este es productos', this.productos); */
  }
  cargarMasaMadre(){
    this.productos = [];
    this.productos.push(...this.masa_madre);
    /* console.log('este es productos', this.productos); */
  }
  cargarTodo(){
    this.productos = [];
    this.productos.push(...this.marraquetas);
    this.productos.push(...this.masa_madre)
  }
}
