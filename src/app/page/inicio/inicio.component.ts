import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  public delivery: string[] = [
    "Callao",
    "Americo Vespucio",
    "Francisco Bilbao",
    "Tobalaba"
  ]
  public productos_pan: any =[
    {
      titulo: "Marraquetas",
      text: "La Marraqueta, pan francés, o pan batido, es un tipo de pan elaborado a base de harina blanca de trigo, agua, levadura y sal, todo batido con un sello propio, de sabor tradicional y una crocancia incomparable. Consta de dos trozos, agrupados. Este tipo de pan no contiene grasas, y se caracteriza por su forma peculiar que permite dividirlo con facilidad.",
      img: "assets/img/marraque-1.jpg",
      name: 'marraquetas'
    },
    {
      titulo: "Pan de masa madre",
      text: "La masa madre natural es un fermento compuesto de harina, agua . En la propia harina hay multitud de levaduras y bacterias que provocan la fermentación de las masas de manera espontánea. Esta forma de fermentación mucho mas saludable, aportan un sabor y aroma especiales a las masas y ayuda a controlar su acidez.",
      img: "assets/img/masa-madre-1.jpg",
      name: 'pan_de_masa_madre'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
