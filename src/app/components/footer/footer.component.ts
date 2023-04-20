import { Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent{
  public getElHeight: number;

  constructor(private el:ElementRef) {}

  obtenerAlto(): number{
    this.getElHeight = this.el.nativeElement.offsetHeight;
    return this.getElHeight;
  }
}
