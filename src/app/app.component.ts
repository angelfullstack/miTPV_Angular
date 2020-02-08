import { Component } from '@angular/core';
import { Producto } from './models/producto';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrComida: Producto[];
  arrBebida: Producto[];
  arrPedido: Producto[];

  constructor() {
    this.arrComida = [
      new Producto('comida', 'Perrito', 1.5, 'assets/images/Hot Dog.png'),
      new Producto('comida', 'Pizza', 2.5, 'assets/images/Pizza.png'),
      new Producto('comida', 'Fajita', 2, 'assets/images/Wrap.png'),
      new Producto('comida', 'Taco', 2.5, 'assets/images/Taco.png'),
      new Producto('comida', 'Quesadilla', 2, 'assets/images/Quesadilla.png'),
      new Producto('comida', 'Hamburguesa', 3.5, 'assets/images/Hamburger.png'),

    ];
    this.arrBebida = [
      new Producto('bebida', 'Cerveza', 1.5, 'assets/images/Beer.png'),
      new Producto('bebida', 'Tercio', 1.5, 'assets/images/Beer Bottle.png'),
      new Producto('bebida', 'Vino', 1.5, 'assets/images/Bar.png'),
      new Producto('bebida', 'Agua', 1.5, 'assets/images/Bottle of Water.png'),
      new Producto('bebida', 'Café', 1.5, 'assets/images/Espresso Cup.png'),
      new Producto('bebida', 'Infusión', 1.5, 'assets/images/Tea.png'),


    ];
    this.arrPedido = [];

  }

  recibirProducto(productoRecibido) {
    if (this.buscarRepetidos(productoRecibido)) {
      console.log('Repetido');
      this.aumentarCantidad(productoRecibido);
    } else {
      console.log('No repetido');
      this.arrPedido.push(productoRecibido);
    }
    console.log(this.arrPedido)
  }

  buscarRepetidos(productoRecibido) {
    let repetido = false;
    for (const producto of this.arrPedido) {
      if (producto === productoRecibido) {
        repetido = true;
      }
      /* else{
        repetido = false;
      } *//* En realidad no hace falta este else, pero no entiendo porqué hace que si se hace un pedido de un producto A luego otro B y de nuevo un A, no detecta la repetición */
    }
    console.log('Repetido es ' + repetido);
    return repetido;
  }

  aumentarCantidad(productoRecibido){
    for(const producto of this.arrPedido){
      if (productoRecibido.nombre === producto.nombre) {
        producto.cantidad+=1;
      }
    }

  }
}
