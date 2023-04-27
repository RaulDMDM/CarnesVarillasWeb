//Importacion de paquetes y componentes.
import { AfterViewChecked,Component, ElementRef, ViewChild } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//Clase principal del componente
export class AppComponent implements AfterViewChecked {
  title = 'VarillasWeb';
  public footerHeight: String;
  
  //tras renderizar el contenido, se espera 1 ms para lanzar la función setFooterSize.
  ngAfterViewChecked(){
    setTimeout(()=>this.setFooterSize(),1)
  }

  //Llamada a componente footer mediante el decorador ViewChild
  @ViewChild(FooterComponent, {static:false}) footer: FooterComponent;
  @ViewChild('footer', {static:false}) footerContainer:ElementRef;

  /*Función para establecer el alto automáticamente del paquete de contenido.
  Recibe la altura del footer desde el componente homónimo y posteriormente lo resta a la altura 
  total del viewport, sacando así la altura que debe tener el contenedor con el resto de componentes.*/
  public setFooterSize(){
    var fHeight = this.footer.obtenerAlto();
    this.footerHeight = fHeight.toString();
    const element = document.getElementById("content");
    if(element){
      element.style.setProperty('min-height', "calc(100vh - " + this.footerHeight + "px)");
    }
  }
}
