import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  url = '/api'
  constructor(private http: HttpClient) { }

  //Consultar datos de un empleado dado su DNI
  getUnEmpleado(dni:string){
    return this.http.get(this.url+'/empleados/'+dni);
  }
}

//Exportación de interfaz empleado
export interface Empleado{
  dni_empleado?:string;
  nombre_empleado?:string;
  contrasenia?:string;
}