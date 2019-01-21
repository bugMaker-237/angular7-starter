import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import { NavigationComponent, AuthGuard } from '@genesis';
import { UserConnectedResolverService, UserMenusResolverService } from './user-connected-resolver.service';
import { HomeComponent } from './home/home.component';
import { RouteAnimatorComponent } from './route-animator/route-animator.component';
const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: NavigationComponent,
    data: {
      appModule: 'Contacts'
    },
    resolve: {
      user: UserConnectedResolverService,
      menus: UserMenusResolverService
    },
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        component: RouteAnimatorComponent,
        children: [
          {
            path: 'persons',
            component: PersonsComponent,
            data: {
              animation: 'persons'
            }
          },
          {
            path: '',
            component: HomeComponent,
            data: {
              animation: 'home'
            }
          },
          {
            path: '**',
            redirectTo: ''
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
