import { Injectable } from '@angular/core';

import { tap, delay, map } from 'rxjs/operators';
import { DataService } from '../../services/public';
import { HttpClient } from '@angular/common/http';
import { StorageService, UserService } from '../../services';
import { IUser, User } from '../../models';

@Injectable({
    providedIn: 'root',
})
export class AuthService extends DataService {
    isLoggedIn = false;

    // store the URL so we can redirect after logging in
    redirectUrl: string;

    constructor(protected http: HttpClient, protected userService: UserService, protected storage: StorageService) {
        super(http, storage, 'User');
        let user = this.userService.getUser();
        this.isLoggedIn = typeof user !== 'undefined' && user !== null && user !== undefined;

    }

    public login(username: string, password: string) {
        return this.get<IUser[]>('users', { key: 'username', value: username })
            .pipe(
                map((u: IUser[]) => {
                    if (u && u.length > 0) return new User(u[0]);
                    else return null;
                }),
                tap((u: User) => {
                    if (!u || !u.id) {
                        this.isLoggedIn = false;
                    }
                    else {
                        this.isLoggedIn = true;
                        this.storage.set(this.localStorageKey, u);
                    }
                })
            );
    }

    public logout(): void {
        this.isLoggedIn = false;
    }
}
