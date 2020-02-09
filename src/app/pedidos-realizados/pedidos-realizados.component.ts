import { Component, OnInit, Input } from '@angular/core';
import { Pedido } from '../models/pedido';

@Component({
  selector: 'app-pedidos-realizados',
  templateUrl: './pedidos-realizados.component.html',
  styleUrls: ['../pedido/pedido.component.css','./pedidos-realizados.component.css']
})
export class PedidosRealizadosComponent implements OnInit {
  @Input() listaPedidos: Pedido[];
  @Input() valorVentas:number;
  constructor() {

    this.listaPedidos = [];
    this.valorVentas=0;

  }

  ngOnInit() {
  }

}
