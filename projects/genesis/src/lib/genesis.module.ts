import {
    BrowserModule
} from '@angular/platform-browser';
import {
    NgModule
} from '@angular/core';

import {
    MaterialModule
} from './material.module';
import {
    RouterModule
} from '@angular/router';
import {
    NavigationComponent
} from './components/navigation/navigation.component';
import {
    HttpClientModule
} from '@angular/common/http';
import {
    UserService
} from './services/user.service';
import { StorageService } from './services/storage.service';
import { ToastService } from './services/toast.service';
import { AuthModule } from './modules/auth/auth.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
    declarations: [
        NavigationComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        HttpClientModule,
        MaterialModule,
        LayoutModule,
        FlexLayoutModule,
        AuthModule
    ],
    exports: [
        NavigationComponent,
        AuthModule,
        MaterialModule
    ],
    providers: [StorageService, UserService, ToastService]
})
export class GenesisModule { }