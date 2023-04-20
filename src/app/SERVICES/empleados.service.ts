import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  url = '/api'
  constructor(private http: HttpClient) { }

  //getEmpleados
  getEmpleados(){
    return this.http.get(this.url + '/empleados')
  }

  //get1Empleado
  getUnEmpleado(dni:string){
    return this.http.get(this.url+'/empleados/'+dni);
  }

  agregarEmpleado(empleado:Empleado){
    return this.http.post(this.url + '/empleados', empleado);
  }

  //eliminar
  deleteEmpleado(dni:string){
    return this.http.delete(this.url + '/empleados/' + dni);
  }

  //modificar
  modificarEmpleado(dni:string, empleado:Empleado){
    return this.http.put(this.url + '/empleados/' + dni, empleado);
  }

}

export interface Empleado{
  dni_empleado?:string;
  nombre_empleado?:string;
  contrasenia?:string;
}