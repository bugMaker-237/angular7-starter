import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from './animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-route-container',
  template: `<div [@routeAnimation]="getAnimationData(routerOutlet)">
              <router-outlet #routerOutlet="outlet"></router-outlet>
            </div>`,
  animations: [slideInAnimation]
})
export class RouteAnimatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
