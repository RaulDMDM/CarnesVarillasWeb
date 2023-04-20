import { Component } from '@angular/core';
import { EmpleadosService, Empleado } from 'src/app/SERVICES/empleados.service';
import { Router } from '@angular/router';
import { LoginPermissionsGuard } from 'src/app/guards/login-permissions.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  ListaEmpleados: Empleado[];
  isTrue = true;
  invalidUserStyle = "";
  invalidPassStyle = "";


  constructor(
    private empleadosService: EmpleadosService,
    private router: Router,
    private premissionsGuard: LoginPermissionsGuard
  ) {}

  validarCredenciales() {
    //Obtencion de valores input dedesde DOM
    let dni = document.getElementById('dni_input') as HTMLInputElement;
    let dniValue = dni.value;

    let pass = document.getElementById('pass_input') as HTMLInputElement;
    let passValue = pass.value;

    //consulta a la bd
    this.empleadosService.getUnEmpleado(dniValue).subscribe(
      (res) => {
        this.ListaEmpleados = <any>res;

        //Comprobar credenciales
        if (dniValue != '' && dniValue) {
          if (this.ListaEmpleados.length != 0) {
            if (passValue == this.ListaEmpleados[0].contrasenia) {
              this.premissionsGuard.IsLoggedIn(true);
              this.router.navigate(['/empleados']);
            } else {
              this.invalidUserStyle = "";
              this.invalidPassStyle = "red";
            }
          } else {
            this.invalidUserStyle = "red";
          }
        } else {
          alert("introduce un usuario");
        }
      },
      (err) => console.log(err)
    );
  }
}
