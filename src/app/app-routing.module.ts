import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isNotAuthenticatedGuard, isAuthenticatedGuard } from './auth/guards';

export const routes: Routes = [
  {
    path: 'auth',
    canActivate: [isNotAuthenticatedGuard],
    loadComponent: () =>
      import('./auth/pages/login-page/login-page.component').then(
        (m) => m.LoginPageComponent
      ),
  },
  {
    path: 'dashboard',
    canActivate: [isAuthenticatedGuard],
    loadComponent: () =>
      import('./admin/admin.component').then((m) => m.AdminComponent),
    children: [
      {
        path: 'hotels',
        loadComponent: () =>
          import('./admin/pages/hotels/hotels.component').then(
            (m) => m.HotelsComponent
          ),
      },
      {
        path: 'bookings',
        loadComponent: () =>
          import('./admin/pages/bookings/bookings.component').then(
            (m) => m.BookingsComponent
          ),
      },
    ],
  },
  {
    path: 'search',
    loadComponent: () =>
      import('./searcher/layout/searcher/searcher.component').then(
        (m) => m.SearcherComponent
      ),
    children: [
      {
        path: 'result',
        loadComponent: () =>
          import('./searcher/components/results/results.component').then(
            (m) => m.ResultsComponent
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'search',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
