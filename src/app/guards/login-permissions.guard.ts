import { Injectable } from '@angular/core';
import { UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginPermissionsGuard {
  constructor(private router: Router){}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isLoged){
      return true
    }else{
      alert('No tienes acceso a este sitio. Por favor, idéntificate si eres empleado')
      this.router.navigate(['/inicio'])
      return false
    }
  }

  isLoged = false;

  IsLoggedIn(loged: boolean):boolean{
    this.isLoged = loged;
    return loged;
  }
  
}
