import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdrianComponent } from './components/adrian/adrian.component';
import { Component } from '@angular/core';
import { JorgeEscrichLaordenComponent } from './components/jorge-escrich-laorden/jorge-escrich-laorden.component';
import { VicenteAlacreuComponent } from './components/vicente-alacreu/vicente-alacreu.component';
import { MarcosGomezComponent } from './components/marcos-gomez/marcos-gomez.component';
import { AlvaroGarciaComponent } from './components/alvaro-garcia/alvaro-garcia.component';
import { AlfonsoComponent } from './components/alfonso/alfonso.component';
import { AlvarosanjoseComponent } from './components/alvarosanjose/alvarosanjose.component';
import { VicenteHerreroComponent } from './components/vicente-herrero/vicente-herrero.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: 'marcos-gomez', component: MarcosGomezComponent },
    {path: 'AlvaroGarcia',component:AlvaroGarciaComponent},
    { path: 'VicenteAlc', component: VicenteAlacreuComponent }, // is OK
    {path: 'jorge-escrich-laorden', component: JorgeEscrichLaordenComponent},
    {path: 'navbar', component: NavbarComponent},
    {path: 'adrian', component: AdrianComponent},
    { path: 'Alfonso', component: AlfonsoComponent},
    {path: 'Alvarosanjose', component: AlvarosanjoseComponent},
    {path: 'vicenteherrero', component: VicenteAlacreuComponent},
    { path: '**', component: PageNotFoundComponent }
];

    


