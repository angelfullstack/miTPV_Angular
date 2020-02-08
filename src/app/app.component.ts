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
  precioTotal: number;

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
    this.precioTotal = 0;

  }

  recibirProducto(productoRecibido) {
    if (this.buscarRepetidos(productoRecibido)) {
      this.aumentarCantidad(productoRecibido);
    } else {
      this.arrPedido.push(productoRecibido);
    }
    this.actualizarTotal();
  }

  buscarRepetidos(productoRecibido) {
    let repetido = false;
    for (const producto of this.arrPedido) {
      if (producto === productoRecibido) {
        repetido = true;
      }
      /* else{
        repetido = false;
      } */
      // tslint:disable-next-line: max-line-length
      /* En realidad no hace falta este else, pero no entiendo porqué hace que si se hace un pedido de un producto A luego otro B y de nuevo un A, no detecta la repetición */
    }
    return repetido;
  }

  aumentarCantidad(productoRecibido) {
    for (const producto of this.arrPedido) {
      if (productoRecibido.nombre === producto.nombre) {
        producto.cantidad += 1;
      }
    }

  }

  modificarCantidad(productoValor) {
    const indice = this.arrPedido.indexOf(productoValor[0])
    const cantidad = this.arrPedido[indice].cantidad;
    if (productoValor[1] === 'quitar' && cantidad > 1) {
      this.arrPedido[indice].cantidad--;
    } else if (productoValor[1] === 'quitar' && cantidad === 1) {
      this.arrPedido.splice(indice, 1);
    } else if (productoValor[1] === 'sumar') {
      this.arrPedido[indice].cantidad++;
    }
    this.actualizarTotal();
  }

  actualizarTotal() {
    let precioTotal: number;
    precioTotal = 0;
    for (const producto of this.arrPedido) {
      precioTotal += producto.precio * producto.cantidad;
    }
    this.precioTotal = precioTotal;
  }
}
