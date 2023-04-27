//Importacion de paquetes y componentes
import { Component, Input, ChangeDetectionStrategy, DoCheck } from '@angular/core';
import { CatalogoComponent } from '../catalogo.component';
import { ProdEnCarro } from '../catalogo.component';
import { PedidosService, PedidoCreado } from 'src/app/SERVICES/pedidos.service';
import { ProductosService} from 'src/app/SERVICES/productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})

//Clase del componente
export class CarritoComponent implements DoCheck{
  
  constructor(private catalogo: CatalogoComponent,
    private pedidosService: PedidosService,
    private productosService: ProductosService){}
  

  //Variables
  @Input() listadoSeleccion: Array<ProdEnCarro>;
  total = 0;
  cantidadRestada = 0;
  enableForm = false;
  currentDate = new Date();
  fechaRecogidaDef = this.currentDate.toISOString().substring(0,10)
  nuevoPedido: PedidoCreado={};
  
  
  //Deteccion de cambios para actualizacion en tiempo real.
  changeDetection: ChangeDetectionStrategy.OnPush;
  
  //Metodo que se ejecuta al detectar cambios en el componente actual
  ngDoCheck(): void {
    this.total = Number((this.catalogo.total - this.cantidadRestada).toFixed(2))
  }

  //Elimina un producto del carrito
  eliminarRegistro(reg: HTMLElement, tot: number){
    this.cantidadRestada = this.cantidadRestada + tot;
    reg.remove();
  }
  
  /*Confirmar pedido. Tras confirmar que en el formulario los datos introducidos son válidos, 
  se agrega el nuevo pedido a la base de datos y se recalcula el stock disponible. Se avisa al 
  usuario mediante una alerta si hay algun problema o si el pedido se ha creado correctamente. */
  okPedido(nombre: string, dni: string, tel: string, mail: string, fechRec: string){
    if (nombre != ""){
      if (dni != "" && dni.length <= 9){
        if(tel != "" && tel.length == 9){
          if(mail != ""){
            if (fechRec != ""){
              this.nuevoPedido = {
                nombre:nombre,
                dni:dni,
                tel:tel,
                mail:mail,
                fechRec: fechRec,
                total: this.total
              }
              this.pedidosService.agregarPedidoCliente(this.nuevoPedido).subscribe();
              
              this.listadoSeleccion.forEach(producto => {
                this.productosService.agregarProductoPedido(producto).subscribe()
                this.productosService.actualizarStockTrasCompra(producto).subscribe();
              });
              
              alert("Pedido creado.\n Nos pondremos en contacto con usted cuando esté listo para recoger.")
              location.reload()

            }else{
              alert("Introduzca una fecha válida")
            }
          }else{
            alert("Introduzca un email válido")
          }
        }else{
          alert("Introduzca un teléfono válido")
        }
      }else{
        alert("Introduzca un DNI válido")
      }
    }else{
      alert("introduzca un nombre válido")
    }
  }

}