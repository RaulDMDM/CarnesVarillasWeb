import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from 'src/app/SERVICES/productos.service';
import { PedidosService, PedidoCliente, ProductoPedido } from 'src/app/SERVICES/pedidos.service';


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit{

  listaPedClient: PedidoCliente[];
  listaProdPedido: ProductoPedido[];
  listaProductos: Producto[];
  styleStatus = "red"

  constructor(private productosService: ProductosService, 
              private pedidosService: PedidosService){}
  
  ngOnInit(){
    this.pintaPedidos()
    this.pintaProductos()
  }

  pintaPedidos(){
    this.pedidosService.getPedidosCliente().subscribe(
      (res) =>{
        this.listaPedClient = <any>res;
      },
      (err) => console.log(err));
    this.pedidosService.getProductoPedido().subscribe(
      (res) =>{
        this.listaProdPedido = <any>res;
      },
      (err) => console.log(err));
  }
  
  editarProducto(nombre_producto: string){
    let trEl = document.getElementById("edit" + nombre_producto)
    let trBtnEl = document.getElementById("btn" + nombre_producto)

    if (trEl!.style.display == 'table-row'){
      trEl!.style.display = 'none'
      trBtnEl!.style.display = 'none'
    }else{
      trEl!.style.display = 'table-row'
      trBtnEl!.style.display = 'table-row'
    }
  }

  guardarEdit(producto: Producto){
    producto.nombre_producto = (<HTMLInputElement>document.getElementById('nombreProd' + producto.nombre_producto)).value
    producto.grupo_producto = (<HTMLInputElement>document.getElementById('grupoProd' + producto.nombre_producto)).value
    producto.cantidad_disponible = Number((<HTMLInputElement>document.getElementById('cantProd' + producto.nombre_producto)).value)
    producto.unidad_medida = (<HTMLInputElement>document.getElementById('unitProd' + producto.nombre_producto)).value
    producto.es_personalizable = Number((<HTMLInputElement>document.getElementById('personProd' + producto.nombre_producto)).value)
    producto.precio_orientativo = Number((<HTMLInputElement>document.getElementById('precioProd' + producto.nombre_producto)).value)

    console.log(producto)

    this.productosService.actualizarProducto(producto).subscribe()
  }

  eliminarProducto(producto: Producto){
    this.productosService.borrarProducto(producto.nombre_producto!).subscribe()
    alert('Producto eliminado')
    location.reload()
  }

  aniadirProductos(){
    let nombre_producto = (<HTMLInputElement>document.getElementById('inNombreProducto')).value
    let grupo_producto = (<HTMLInputElement>document.getElementById('inGrupoProducto')).value
    let cant_disp = Number((<HTMLInputElement>document.getElementById('inCantDisp')).value)
    let unidad_medida = (<HTMLInputElement>document.getElementById('inUnidadMedida')).value
    let es_personalizable = (<HTMLInputElement>document.getElementById('inPersonalizable')).value
    let precio_orientativo = Number((<HTMLInputElement>document.getElementById('inPrecio')).value)
    
    let conv_es_person

    if (es_personalizable == 'Si'){
      conv_es_person = 1
    }else{
      conv_es_person = 0
    }
    
    let newProducto: Producto = {
      nombre_producto: nombre_producto,
      grupo_producto: grupo_producto,
      cantidad_disponible: cant_disp,
      unidad_medida: unidad_medida,
      es_personalizable: conv_es_person,
      precio_orientativo: precio_orientativo
    }
    
    this.productosService.agregarProductoStock(newProducto).subscribe()
    location.reload()
  }
  
  pintaProductos(){
    this.productosService.getStock().subscribe(
      (res) =>{
        this.listaProductos = <any>res;
      },
      (err) => console.log(err));
  }

  convFecha(input?: string){
    let fechaConv = new Date(input ?? '');
    let day = fechaConv.getDate();
    let month = fechaConv.getMonth();
    let year = fechaConv.getFullYear();

    let finalDate = day.toString() + "/" + month.toString() + "/" + year.toString();
    
    return finalDate;
  }

  updtProdStatus(event: Event, id_pedido?:number){
    let selection = event.target as HTMLInputElement;
    let UpdatePed = {
      id_pedido: id_pedido,
      estado: "",
    }

    switch(selection.value){
      case "solicitado":{
        UpdatePed.estado = "SOLICITADO"
        this.pedidosService.updateEstado(UpdatePed).subscribe()
        break
      }
      case "enProceso":{
        UpdatePed.estado = "EN PROCESO"
        this.pedidosService.updateEstado(UpdatePed).subscribe()
        break
      }
      case "pteEntrega":{
        UpdatePed.estado = "PTE ENTREGA"
        this.pedidosService.updateEstado(UpdatePed).subscribe()
        break
      }
      case "finalizado":{
        UpdatePed.estado = "FINALIZADO"
        this.pedidosService.updateEstado(UpdatePed).subscribe()
        break
      }
    }
    location.reload()
  }
}
