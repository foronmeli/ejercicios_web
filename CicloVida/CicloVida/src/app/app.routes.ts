import { Routes } from '@angular/router';
import { Constructor } from './constructor/constructor';

export const routes: Routes = [
    {
        path:"",
        component: Constructor,
        pathMatch:"full"
    }
];
