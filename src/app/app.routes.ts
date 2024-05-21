import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
<<<<<<< HEAD
import { MarcosGomezComponent } from './components/marcos-gomez/marcos-gomez.component';
=======
import { AlvaroGarciaComponent } from './components/alvaro-garcia/alvaro-garcia.component';
import { VicenteAlacreuComponent } from './components/vicente-alacreu/vicente-alacreu.component';
import { MarcosGomezComponent } from './marcos-gomez/marcos-gomez.component';
import { JorgeEscrichLaordenComponent } from './components/jorge-escrich-laorden/jorge-escrich-laorden.component';
import { AlfonsoComponent } from './components/alfonso/alfonso.component';

import { AlvarosanjoseComponent } from './components/alvarosanjose/alvarosanjose.component';

>>>>>>> main

export const routes: Routes = [
    { path: 'marcos-gomez', component: MarcosGomezComponent },
    {path: 'AlvaroGarcia',component:AlvaroGarciaComponent},
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: 'marcos-gomez', component: MarcosGomezComponent },
    { path: 'VicenteAlc', component: VicenteAlacreuComponent }, // is OK
    {path: 'home', component: HomeComponent},
    {path: 'jorge-escrich-laorden', component: JorgeEscrichLaordenComponent},
    {path: 'navbar', component: NavbarComponent},
    { path: 'Alfonso', component: AlfonsoComponent},
    {path: "alvarosanjose", component:AlvarosanjoseComponent},
    { path: '**', component: PageNotFoundComponent }, 
    
];