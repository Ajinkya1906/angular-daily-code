import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./layout/dashboard/dashboard').then(m => m.Dashboard),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'data-binding/interpolation',
      },
      {
        path: 'data-binding/interpolation',
        loadComponent: () =>
          import('./topics/data-binding/interpolation/interpolation').then(
            m => m.Interpolation,
          ),
      },
      {
        path: 'data-binding/property-binding',
        loadComponent: () =>
          import('./topics/data-binding/property-binding/property-binding').then(
            m => m.PropertyBinding,
          ),
      },
      { 
        path: 'data-binding/event-binding',
        loadComponent: () =>
          import('./topics/data-binding/event-binding/event-binding').then( 
            m => m.EventBinding,
          ),
      },
      {     
        path: 'data-binding/two-way-binding',
        loadComponent: () =>
          import('./topics/data-binding/two-way-binding/two-way-binding').then(
            m => m.TwoWayBinding,
          ),  
      }
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
