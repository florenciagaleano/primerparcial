import { Routes } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { RepartidorListadoComponent } from './components/repartidor-listado/repartidor-listado.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'altaRepartidor',
    loadComponent: () =>
      import('./components/alta-repartidor/alta-repartidor.component').then(
        (mod) => mod.AltaRepartidorComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'repartidores',
    component: RepartidorListadoComponent,
    canActivate: [authGuard],
  },
];
