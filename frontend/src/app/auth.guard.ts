import { CanActivate, Router, ActivatedRouteSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: UserService,
        private router: Router){}
    
    canActivate(route: ActivatedRouteSnapshot, 
    state: import("@angular/router").RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const isAuth = this.authService.isUserLogedIn();
        if(!isAuth){
            this.router.navigate(['']);
        }
        return isAuth;
    }

}