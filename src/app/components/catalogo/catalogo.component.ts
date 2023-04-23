import { Component, HostListener, OnInit} from '@angular/core';
import { ProductosService, Producto } from 'src/app/SERVICES/productos.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  ribbonIdSelected: string = "ribbonTernera";

  listaProductos: Producto[];
  listadoSeleccion = new Array<ProdEnCarro>;
  
  prodSeleccionado: ProdEnCarro = {
    nombre_producto:"",
    grupo_producto:"",
    precio_producto:0,
    cant_seleccionada:0,
    total_producto:0,

  }

  constructor(private productosService: ProductosService){}

  ngOnInit(): void {
    this.pintaStock();
  }
  
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(){
    this.autoColorRibbon()
  }

  scrollAndSelect(el: HTMLElement, event: Event){
    const yOffset = -294;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});

    var currentRibId = event.target as HTMLElement;
    this.ribbonIdSelected = currentRibId.id;
  };

  autoColorRibbon(){
    const ternera = document.getElementById("ternera");
    const cerdo = document.getElementById("cerdo");
    const cordero = document.getElementById("cordero");
    const elaborados = document.getElementById("elaborados");
    const embutido = document.getElementById("embutido");

    const terTopPosition = ternera?.getBoundingClientRect().top
    const cerTopPosition = cerdo?.getBoundingClientRect().top
    const corTopPosition = cordero?.getBoundingClientRect().top
    const elbTopPosition = elaborados?.getBoundingClientRect().top
    const embTopPosition = embutido?.getBoundingClientRect().top

    console.log('ternera: ' + terTopPosition)
    console.log('cerdo: ' + cerTopPosition)
    console.log('cordero: ' + corTopPosition)
    console.log('elaborados: ' + elbTopPosition)
    console.log('embutido: ' + embTopPosition)
    
    if (terTopPosition! < 300 && terTopPosition! > 250){
      this.ribbonIdSelected = "ribbonTernera";
    } else if(cerTopPosition! < 300 && cerTopPosition! > 250){
      this.ribbonIdSelected = "ribbonCerdo";
    } else if(corTopPosition! < 300 && corTopPosition! > 250){
      this.ribbonIdSelected = "ribbonCordero";
    } else if(elbTopPosition! < 300 && elbTopPosition! > 250){
      this.ribbonIdSelected = "ribbonElaborados";
    } else if(embTopPosition! < 300 && embTopPosition! > 250){
      this.ribbonIdSelected = "ribbonEmbutido";
    }
  }
  
  //Consulta SQL para rellenar stock
  pintaStock(){
    this.productosService.getStock().subscribe(
      (res) =>{
        this.listaProductos = <any>res;
      },
      (err) => console.log(err)
    )
  }

  //Listado de productos añadidos al carro y funcion para añadir.

  total = 0;
  addProducto(nombre: any,grupo: any, unidad: any, precioOr:any ,cantDisp:any,esPers:any, cantSelec: any){

    let calculoTotal: number;
    
    if (cantSelec > 0){
      if (cantSelec <= cantDisp) {

        if(unidad == "gr"){
          calculoTotal = Number(((cantSelec*precioOr)/1000).toFixed(2));
        }else{
          calculoTotal = Number((cantSelec * precioOr).toFixed(2));
        }
    
        this.prodSeleccionado = {
          nombre_producto: nombre,
          grupo_producto:grupo,
          unidad_producto: unidad,
          precio_producto:precioOr,
          cant_seleccionada:cantSelec,
          total_producto:calculoTotal,
        }
        this.total = calculoTotal + this.total
        this.listadoSeleccion.push(this.prodSeleccionado);

      }else{
        alert("La cantidad seleccionada es mayor a la disponible en stock.")
      }
    }else{
      alert("No se ha seleccionado ninguna cantidad")
    }
  }
}

//Declaracion de la interfaz (objeto) producto en el carro.
export interface ProdEnCarro{
  nombre_producto?:string,
  grupo_producto?:string,
  unidad_producto?:string,
  precio_producto?:number,
  cant_seleccionada?:number,
  total_producto?:number,
}
