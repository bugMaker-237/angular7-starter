import {
    Injectable
} from "@angular/core";

import { User, UserService, IMenu } from '@genesis';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserConnectedResolverService implements Resolve<User>{

    constructor(private userService: UserService) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User | never {
        return this.userService.getUser();
    }
}

@Injectable({
    providedIn: 'root'
})
export class UserMenusResolverService implements Resolve<IMenu[]>{

    constructor(private userService: UserService) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMenu[]> {
        let u = this.userService.getUser();
        return this.userService.getUsermenus(u.id);
    }
}