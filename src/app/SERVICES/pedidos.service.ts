import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  url='/api'
  constructor(private http: HttpClient) { }

  getPedidosCliente(){
    return this.http.get(this.url + '/pedidos-cliente')
  }

  agregarPedidoCliente(pedido: PedidoCreado){
    return this.http.post(this.url + '/pedidos-cliente', pedido);
  }

  getProductoPedido(){
    return this.http.get(this.url + '/productos-pedido')
  }

  updateEstado(UpdatePed: Object){
    return this.http.put(this.url + '/pedidos-cliente/', UpdatePed);
  }
}

export interface PedidoCreado{
  nombre?:string,
  dni?:string,
  tel?:string,
  mail?:string,
  fechRec?:string,
  total?:number
}

export interface PedidoCliente{
  id_pedido?:number,
  fecha_solicitud?:string,
  fecha_recogida?:string,
  estado?:string,
  dni_cliente?:string,
  nombre_cliente?:string,
  telefono_cliente?:number,
  email_cliente?:string,
  total_pedido?:number
}

export interface ProductoPedido{
  id_pedido?: number,
  nombre_producto?: string,
  cantidad_producto?: number,
  grupo_producto?: string,
  importe_producto?: number
}

