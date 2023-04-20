import { AfterViewChecked,Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  title = 'VarillasWeb';
  public footerHeight: String;

  ngAfterViewChecked(){
    setTimeout(()=>this.setFooterSize(),1)
  }

  @ViewChild(FooterComponent, {static:false}) footer: FooterComponent;
  @ViewChild('footer', {static:false}) footerContainer:ElementRef;


  @HostListener('window:resize', ['$event'])
  onWindowResize(){
  }

  public setFooterSize(){
    var fHeight = this.footer.obtenerAlto();
    this.footerHeight = fHeight.toString();
    const element = document.getElementById("content");
    if(element){
      element.style.setProperty('min-height', "calc(100vh - " + this.footerHeight + "px)");
    }
  }
}
