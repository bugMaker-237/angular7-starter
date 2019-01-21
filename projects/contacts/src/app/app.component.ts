import {
    Component, NgModule
} from '@angular/core';

import { ToastService } from '@genesis';


@Component({
    selector: 'app-root',
    template: `<router-outlet></router-outlet>`,
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'contacts';

    constructor(private toastRef: ToastService) {
    }
} 
