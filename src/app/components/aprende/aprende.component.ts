//Importación de paquetes y componentes
import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-aprende',
  templateUrl: './aprende.component.html',
  styleUrls: ['./aprende.component.css']
})

//Clase del componente
export class AprendeComponent {
  
  //Declaracion de variables
  idList: Array<string> = ["1-cabeza", "2-lengua", "3-carrillada", 
                          "4-pescuezo", "5-morrillo", "6-aguja","7-lomoAlto","8-solomillo",
                          "9-lomoBajo","10-cadera", "11-rabo", "12-tapilla", "13-pez", "14-espaldilla",
                          "15-llana", "16-costillar", "17-falda", "18-babilla", "19-tapa", "20-rabilloCadera",
                          "21-contra", "22-redondo", "23-pecho", "24-brazuelo", "25-aleta", "26-morcilloAnt",
                          "27-culataContra", "28-morcilloPost"];
  ribbonIdSelected: string = "ribbonDespieces";
  
  //Llamada a la funcion pintar descripcion cuando se inicia el componente.
  ngOnInit(){
    this.pintarDescripcion();
  }
  //Llamar a la funcion autoColorRibbon cuando se hace scroll
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(){
    this.autoColorRibbon()
  }

  /*Funcion que tras seleccionar una opción del menú te lleva automáticamente
  al elemento seleccionado y colorea el ribbon como seleccionado*/
  scrollAndSelect(element: HTMLElement, event: Event){
    const yOffset = -294;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});

    var currentRibId = event.target as HTMLElement;
    this.ribbonIdSelected = currentRibId.id;
  };

  /*Funcion que marca un ribbon como seleccionado cuando te desplazas
  por la página haciendo scroll*/
  autoColorRibbon(){
    const Despieces = document.getElementById("despieces");
    const Herramientas = document.getElementById("herramientas");
    const DespTopPosition = Despieces?.getBoundingClientRect().top
    const HerrTopPosition = Herramientas?.getBoundingClientRect().top
    console.log(DespTopPosition)

    if (DespTopPosition && HerrTopPosition != null) {
      if(DespTopPosition < 277 && DespTopPosition > -314){
        this.ribbonIdSelected = "ribbonDespieces";
      }else{
        this.ribbonIdSelected = "ribbonHerramientas"
      }
    };
  }
  
  /*Función que muestra la descripción de un corte de carne soiempre que el cursor
  se encuentre dentro de la zona dibujada. Utiliza las ids almacenadas en la variable
  idList para identificar que descripción debe pintar. Calcula la posición del cursor
  para saber en que parte de la pantalla pintar la descripción. */
  pintarDescripcion(){
    for (let i = 0; i < this.idList.length; i++) {
      const triggerElement = document.getElementById(this.idList[i]);

      triggerElement?.addEventListener("mouseover", (event)=>{
        const actualElement = document.getElementById(this.idList[i]+"-display");

        if(actualElement != null){
          actualElement.style.display = "block";
          
          triggerElement.addEventListener("mousemove", (event)=>{
            if(event.pageY < (window.innerHeight*50)/100){ 
              actualElement.style.top = event.pageY + "px";
              
            }else{
              actualElement.style.top = (event.pageY - actualElement.clientHeight/2) + "px";
              
            }
            if(event.pageX < (window.innerWidth*50)/100){
              actualElement.style.left = event.pageX + 50 + "px";
            }else{
              actualElement.style.left = (event.pageX - actualElement.clientWidth - 50) + "px";
            }


          })
        }
      })
      triggerElement?.addEventListener("mouseleave", (event)=>{
        const quitarDiv = document.getElementById(this.idList[i]+"-display");
        if (quitarDiv != null){
          quitarDiv.style.display = "none";
        }
      })
      
    }

  }
}
