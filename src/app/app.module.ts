import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { AprendeComponent } from './components/aprende/aprende.component';
import { SnosotrosComponent } from './components/snosotros/snosotros.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { CarritoComponent } from './components/catalogo/carrito/carrito.component';

@NgModule({
  declarations: [HeaderComponent,
    InicioComponent, 
    FooterComponent, 
    AppComponent, 
    CatalogoComponent, 
    AprendeComponent, 
    SnosotrosComponent, 
    EmpleadosComponent, 
    ContactoComponent, 
    LoginComponent, 
    CarritoComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
