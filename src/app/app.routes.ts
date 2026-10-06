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

      // Self Practice
    {
     path: '',
    loadChildren: () =>
      import('./topics/self-practice/self-practice.routes').then(m => m.SELF_PRACTICE_ROUTES),
    },

  // For Online Class.
  {
    path: '',
    loadChildren: () =>
      import('./topics/topics.routes').then(m => m.TOPICS_ROUTES),
  },

 // Practice AVS Routes
  {
    path: '',
    loadChildren: () =>
      import('./topics/practise-avs/practice-avs.routes').then(
        m => m.PRACTICE_AVS_ROUTES
      ),
  },      
      
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];