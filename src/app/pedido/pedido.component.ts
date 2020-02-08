import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../models/producto';


@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  @Input() listaPedido: Producto[];
  totalPedido: Producto[];

  constructor() {
    this.listaPedido = [];
  }

  ngOnInit() {
  }

  aumentarUnidad(producto) {
    console.log(producto);
  }
  quitarUnidad(producto) {
    console.log(producto);
  }
  contarRepetidos(producto) {
    console.log(producto);
  }
}
