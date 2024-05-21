import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AlvarosanjoseComponent } from './components/alvarosanjose/alvarosanjose.component';


export const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'navbar', component: NavbarComponent},
    {path: "alvarosanjose", component:AlvarosanjoseComponent},
    { path: '**', component: PageNotFoundComponent }, 
];
