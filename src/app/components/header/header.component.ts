//Importacion de paquetes y componentes
import { Component,OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

//Clase del componente
export class HeaderComponent implements OnInit{
  idSelected: String;
  componenteActual: String;
  
  //Declaración del constructor con la variable idSelected (se utiliza para dar estilo al elemento seleccionado)
  constructor(private router : Router) {
    this.idSelected="";
  }
  
  /*Cuando se inicie el componente (funcion ngOnInit) se le dará el valor de 'inicio' a idSelected, así saldrá
  la opción inicio del menú marcada.  */
  ngOnInit(): void {
    this.router.events.subscribe(event =>{
      if (event instanceof NavigationEnd){
        if(event.urlAfterRedirects == "/"){
          this.idSelected = "inicio";
        }else{
          this.idSelected = event.urlAfterRedirects.substring(1);
        }  
      }
    })
  }

  //Se le asigna el valor del id del boton que se seleccione al idSelected para aplicar estilo al elemento.
  NavBtnSelected(event:Event): void{
    var currentId = event.target as HTMLElement;
    this.idSelected = currentId.id;
  }
}
