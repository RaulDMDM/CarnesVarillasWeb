//Importacion de paquetes y componentes
import { Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})

//Clase del componente
export class FooterComponent{
  public getElHeight: number;
  
  //Declaración del constructor
  constructor(private nativeElement:ElementRef) {}
  
  //Obtener el alto del footer
  obtenerAlto(): number{
    this.getElHeight = this.nativeElement.nativeElement.offsetHeight;
    return this.getElHeight;
  }
}
