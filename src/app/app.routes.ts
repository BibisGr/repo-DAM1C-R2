import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MarcosGomezComponent } from './marcos-gomez/marcos-gomez.component';

export const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: 'marcos-gomez', component: MarcosGomezComponent },
    {path: 'home', component: HomeComponent},
    {path: 'navbar', component: NavbarComponent},
    { path: '**', component: PageNotFoundComponent }, 
];
