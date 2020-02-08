import { Component} from '@angular/core';
import { Producto } from './models/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrComida: Producto[];
  arrBebida: Producto[];
  arrPedido:Producto[];

  constructor() {
    this.arrComida=[
      new Producto('comida', 'Perrito', 1.5, 'assets/images/Hot Dog.png'),
      new Producto('comida', 'Pizza', 2.5, 'assets/images/Pizza.png'),
      new Producto('comida', 'Fajita', 2, 'assets/images/Wrap.png'),
      new Producto('comida', 'Taco', 2.5, 'assets/images/Taco.png'),
      new Producto('comida', 'Quesadilla', 2, 'assets/images/Quesadilla.png'),
      new Producto('comida', 'Hamburguesa', 3.5, 'assets/images/Hamburger.png'),

    ];
    this.arrBebida = [
      new Producto('bebida', 'Cerveza', 1.5, 'assets/images/Beer.png'),
      new Producto('bebida', 'Cerveza', 1.5, 'assets/images/Beer Bottle.png'),
      new Producto('bebida', 'Cerveza', 1.5, 'assets/images/Bar.png'),
      new Producto('bebida', 'Cerveza', 1.5, 'assets/images/Bottle of Water.png'),
      new Producto('bebida', 'Cerveza', 1.5, 'assets/images/Espresso Cup.png'),
      new Producto('bebida', 'Cerveza', 1.5, 'assets/images/Tea.png'),


    ];
    this.arrPedido=[];
  }

  recibirProducto(producto){
    this.arrPedido.push(producto);
    console.log(this.arrPedido);
  }
}
