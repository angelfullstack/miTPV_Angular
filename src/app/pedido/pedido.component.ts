import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../models/producto';


@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  @Input() listaPedido: Producto[];
  @Input() precioTotal: number;
  totalPedido: Producto[];
  /* He intentado tipar algo así como EventEmitter<Producto,string> pero no me deja. Tampoco EventEmitter[<Producto>,string] */
  @Output() modificadorCantidad: EventEmitter<any>;
  constructor() {
    this.listaPedido = [];
    this.modificadorCantidad = new EventEmitter();
  }

  ngOnInit() {
    console.log(this.listaPedido)
  }

  aumentarUnidad(producto) {
    this.modificadorCantidad.emit([producto, 'sumar']);
  }
  quitarUnidad(producto) {
    this.modificadorCantidad.emit([producto, 'quitar']);
  }



}
