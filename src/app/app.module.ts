// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
const ANGULARS = [BrowserModule, RouterModule];

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

// Components
import { CONTAINERS } from '.';

// Third party Module
import { OwlModule } from 'ngx-owl-carousel';


const IMPORTS = [...ANGULARS, OwlModule, AppRoutes];
const DECLARATIONS = [AppComponent, ...CONTAINERS];

@NgModule({
    declarations: [...DECLARATIONS],
    imports: [...IMPORTS],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
