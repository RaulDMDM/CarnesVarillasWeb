import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit{
  idSelected: String;
  componenteActual: String;

  constructor(private router : Router) {
    this.idSelected="";
  }

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

  NavBtnSelected(event:Event): void{
    var currentId = event.target as HTMLElement;
    this.idSelected = currentId.id;
  }

}
