import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { User, IMenu } from '../../models';
// import { slideInAnimation } fro../../../../../contacts/src/app/route-container/animationsons';

@Component({
    selector: 'genesis-nav',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    // animations: [slideInAnimation]
})
export class NavigationComponent implements OnInit {

    public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );
    public user: User;
    public menus: IMenu[];
    public appModule: string;

    constructor(private breakpointObserver: BreakpointObserver, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.data
            .subscribe((data: { appModule: string, user: User, menus: IMenu[] }) => {
                this.user = data.user;
                this.menus = data.menus;
                this.appModule = data.appModule;
            });
    }

}
