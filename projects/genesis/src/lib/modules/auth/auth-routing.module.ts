import {
    NgModule
} from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';
// import { AuthGuard } from './auth.guard';
import {
    AuthService
} from './auth.service';
import {
    LoginComponent
} from './login/login.component';
import {
    AuthComponent
} from './auth.component';
import { UserConnectedGuard } from './user-connected.guard';

const authRoutes: Routes = [{
    path: 'auth',
    component: AuthComponent,
    canActivate: [UserConnectedGuard],
    children: [
        {
            path: '',
            canActivateChild: [UserConnectedGuard],
            children: [
                {
                    path: 'login',
                    component: LoginComponent
                }
            ]
        }
    ]
}

];

@NgModule({
    imports: [
        RouterModule.forChild(authRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule { }