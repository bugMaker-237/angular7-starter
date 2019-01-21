import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";
import { PersonsComponent } from './persons/persons.component';
import { GenesisModule } from '@genesis';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteAnimatorComponent } from './route-animator/route-animator.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    HomeComponent,
    RouteAnimatorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GenesisModule,
    LayoutModule,
    FlexLayoutModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
