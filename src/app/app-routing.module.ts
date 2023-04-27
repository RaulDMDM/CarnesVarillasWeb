import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AprendeComponent } from './components/aprende/aprende.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SnosotrosComponent } from './components/snosotros/snosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LoginComponent } from './components/login/login.component';
import { LoginPermissionsGuard } from './guards/login-permissions.guard';

const routes: Routes = [
  {path:"", component:InicioComponent},
  {path:"inicio", component:InicioComponent},
  {path:"catalogo", component:CatalogoComponent},
  {path:"aprende", component:AprendeComponent},
  {path:"snosotros", component:SnosotrosComponent},
  {path:"empleados",component:EmpleadosComponent, canActivate:[LoginPermissionsGuard]},
  {path:"contacto",component:ContactoComponent},
  {path:"login",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
