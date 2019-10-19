// import { Injectable } from '@angular/core';
// import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
// import { SigninService } from '../shared/services/signin.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate, CanActivateChild {
//   constructor(
//     private router: Router,
//     private localStorage: LocalStorageService,
//     private sessionStorage: SessionStorageService,
//     public signinService: SigninService
//     ) {}

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return this.autenticated();
//   }

//   canActivateChild(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return this.canActivate(next, state);
//   }

//   private autenticated() {
//     const token = this.localStorage.retrieve('authenticationToken') || this.sessionStorage.retrieve('authenticationToken');
//     if (!token) {
//       this.router.navigateByUrl('/signin');
//       this.signinService.changeSignin(false);
//       return false;
//     }

//     this.signinService.changeSignin(true);
//     return true;
//   }
// }
