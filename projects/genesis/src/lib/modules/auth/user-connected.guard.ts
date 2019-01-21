import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild, UrlSegment } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root',
})
export class UserConnectedGuard implements CanActivate, CanActivateChild {

    constructor(
        private authService: AuthService,
        private router: Router) { }

    public canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        let url: any[];

        if (typeof next.url === 'undefined' || next.url === null || next.url === undefined)
            url = ['/'];
        else
            url = next.url;

        return this.checkLogin(url);

    }

    public canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {

        return this.canActivate(next, state);
    }
    private checkLogin(url: any[]): boolean {

        if (this.authService.isLoggedIn) {
            this.router.navigate(url);
            return false;
        }
        return true;

    }
}