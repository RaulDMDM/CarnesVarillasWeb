import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProdEnCarro } from '../components/catalogo/catalogo.component';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  url='/api'
  constructor(private http: HttpClient) { }

  getStock(){
    return this.http.get(this.url + '/stock')
  }

  agregarProductoPedido(producto: ProdEnCarro){
    return this.http.post(this.url + '/stock/addselectprod', producto);
  }

  agregarProductoStock(producto:Producto){
    return this.http.post(this.url + '/stock/addproducto', producto);
  }

  actualizarStockTrasCompra(producto:ProdEnCarro){
    return this.http.put(this.url + '/stock/updateselectprod', producto);
  }

  actualizarProducto(producto:Producto){
    return this.http.put(this.url + '/stock/updatestockprod', producto);
  }

  borrarProducto(nombre: string){
    return this.http.delete(this.url + '/stock/deletestockprod/' + nombre);
  }
}

export interface Producto{
  nombre_producto?:string;
  cantidad_disponible?:number;
  precio_orientativo?:number;
  es_personalizable?:number;
  grupo_producto?:string;
  unidad_medida?:string;
}