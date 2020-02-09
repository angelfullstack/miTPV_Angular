import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';
import { Producto } from '../models/producto';
import { runInThisContext } from 'vm';


@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  @Input() listaPedido: Producto[];
  @Input() precioTotal: number;
  totalPedido: Producto[];
  listaVacia: string[];
  longitudPedido: number;
  /* He intentado tipar algo así como EventEmitter<Producto,string> pero no me deja. Tampoco EventEmitter[<Producto>,string] */
  @Output() modificadorCantidad: EventEmitter<any>;
  constructor() {
    this.listaPedido = [];
    this.modificadorCantidad = new EventEmitter();
    this.listaVacia = [];
    this.listaVacia[10] = '';
    this.longitudPedido = 0;

  }

  ngOnInit() {

  }

  /* Cuando hay cambios en el componente se chequea...  */
  ngDoCheck() {
    /* Quiero que cada vez que aparezca un producto y la lista supere el height, la lista haga scroll al último elemento */
    /* this.pedido[0].scrollTop = this.pedido[0].scrollHeight; */



  }

  aumentarUnidad(producto) {
    this.modificadorCantidad.emit([producto, 'sumar']);
  }
  quitarUnidad(producto) {
    this.modificadorCantidad.emit([producto, 'quitar']);
  }

}

