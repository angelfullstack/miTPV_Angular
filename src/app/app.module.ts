import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { PedidoComponent } from './pedido/pedido.component';
import { PedidosRealizadosComponent } from './pedidos-realizados/pedidos-realizados.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    PedidoComponent,
    PedidosRealizadosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
