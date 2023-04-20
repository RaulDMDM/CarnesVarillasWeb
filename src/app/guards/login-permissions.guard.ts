import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginPermissionsGuard implements CanActivate {
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isLoged){
      return true
    }else{
      return false
    }
  }

  isLoged = false;

  IsLoggedIn(loged: boolean):boolean{
    this.isLoged = loged;
    return loged;
  }
  
}
