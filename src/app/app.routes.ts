import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AlvaroGarciaComponent } from './components/alvaro-garcia/alvaro-garcia.component';


export const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    {path: 'AlvaroGarcia',component:AlvaroGarciaComponent},
    {path: 'home', component: HomeComponent},
    {path: 'navbar', component: NavbarComponent},
    { path: '**', component: PageNotFoundComponent }, 
];
