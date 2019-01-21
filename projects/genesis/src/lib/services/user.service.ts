import {
    Injectable, Inject
} from "@angular/core";

import { StorageService } from "./storage.service";
import { DataService } from "./public/data.service";
import { IUser, User } from "../models/User";
import { HttpClient } from '@angular/common/http';
import { IUserMenu, IMenu } from "../models/common/Menu";
import { map, catchError, tap } from "rxjs/operators";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class UserService extends DataService {

    constructor(protected http: HttpClient, protected storage: StorageService) {
        super(http, storage, 'User');
    }

    public getUsermenus(userId: string): Observable<IMenu[]> {
        // return this.get<IUserMenu>('usermenus/' + userId)
        //     .pipe(map((ums: IUserMenu) => ums.menus));
        return of([{
            "path": "/persons",
            "name": "Persons",
            "icon": "contacts"
        },
        {
            "path": "/enterprises",
            "name": "Enterprises",
            "icon": "business"
        },
        {
            "path": "/settings",
            "name": "settings",
            "icon": "settings"
        }
        ] as IMenu[]);
    }

    public getUser(): User {
        let key = this.localStorageKey as string;
        return this.storage.getObject<User>(key);
    }
}