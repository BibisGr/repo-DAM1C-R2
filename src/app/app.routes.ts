import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JorgeEscrichLaordenComponent } from './components/jorge-escrich-laorden/jorge-escrich-laorden.component';
import { VicenteAlacreuComponent } from './vicente-alacreu/vicente-alacreu.component';
import { MarcosGomezComponent } from './marcos-gomez/marcos-gomez.component';


=======


export const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: 'marcos-gomez', component: MarcosGomezComponent },
    {path: 'home', component: HomeComponent},
    {path: 'valacreu', component: VicenteAlacreuComponent},
    {path: 'component/jorge-escrich-laorden', component: jorge-escrich-laorden},
    {path: 'navbar', component: NavbarComponent},
    { path: 'Alfonso', component: AlfonsoComponent},
    { path: '**', component: PageNotFoundComponent }, 
    
];
