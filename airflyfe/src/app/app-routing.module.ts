import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './pages/landing/landing.component';
import {NgModule} from '@angular/core';
import {LoginComponent} from './core/auth/login/login.component';
import {AuthGuard} from './core/auth/auth.guard';
import {RegisterComponent} from './core/auth/register/register.component';
import {FlightsComponent} from './pages/flights/flights.component';
import {AddFlightComponent} from './pages/add-flight/add-flight.component';
import {RoleGuard} from './core/auth/role.guard';
import {AllFlightsComponent} from './pages/all-flights/all-flights.component';
import {TicketReservationComponent} from './pages/tickets/ticket-reservation/ticket-reservation.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AddFlightComponent, canActivate: [RoleGuard] },
  { path: 'flights', component: AllFlightsComponent },
  { path: 'ticket', component: TicketReservationComponent, canActivate: [AuthGuard] },


  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
  },
  {
    path: 'airfly',
    component: LandingComponent,
    children: [
      {
        path: 'letovi',
        component: FlightsComponent,
      },
      {
        path: 'destinacije',
        component: FlightsComponent,
      },
      {
        path: 'informacije',
        component: FlightsComponent,
      },
      {
        path: 'kontakt',
        component: FlightsComponent,
      },

      {
        path: 'registracija',
        component: FlightsComponent,
      },
      {
        path: 'prijava',
        component: FlightsComponent,
      },
    ],
  },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
