import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VicenteAlacreuComponent } from './components/vicente-alacreu/vicente-alacreu.component';
import { MarcosGomezComponent } from './marcos-gomez/marcos-gomez.component';
import { JorgeEscrichLaordenComponent } from './components/jorge-escrich-laorden/jorge-escrich-laorden.component';



export const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: 'marcos-gomez', component: MarcosGomezComponent },
    { path: 'VicenteAlc', component: VicenteAlacreuComponent }, // is OK
    {path: 'home', component: HomeComponent},
    {path: 'component/jorge-escrich-laorden', component: jorge-escrich-laorden}, // tu componente tiene problemas
    {path: 'jorge-escrich-laorden', component: JorgeEscrichLaordenComponent},
    {path: 'navbar', component: NavbarComponent},
    { path: '**', component: PageNotFoundComponent }, 
    
];
