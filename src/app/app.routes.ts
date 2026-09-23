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
        path: 'self-practice/data-binding-practice',
        loadComponent: () =>
          import(
            './topics/self-practice/data-binding-practice/data-binding-practice'
          ).then(m => m.DataBindingPractice),
      },
      {
        path: 'self-practice/directive-practice',
        loadComponent: () =>
          import(
            './topics/self-practice/directive-practice/directive-practice'
          ).then(m => m.DirectivePractice),
      },

      // Data Binding
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
      },

       {
        path: 'directive/structural-directive',
        loadComponent: () =>
          import('./topics/directive/structural-directive/structural-directive').then(
            m => m.StructuralDirective,
          ),
      },

      {
        path: 'directive/attribute-directive',
        loadComponent: () =>
          import('./topics/directive/attribute-directive/attribute-directive').then(
            m => m.AttributeDirective,
          ),
      },

      {
        path: 'directive/custom-directive',
        loadComponent: () =>
          import('./topics/directive/custom-directive/custom-directive').then(
            m => m.CustomDirective,
          ),  
      },
      {
        path : 'pipe/built-in-pipe',
        loadComponent: () =>
          import('./topics/pipe/builtin-pipe/builtin-pipe').then(
            m => m.BuiltinPipe,   
          ),
      },
      {
        path : 'pipe/custom-pipe',
        loadComponent: () =>
          import('./topics/pipe/custom-pipe/custom-pipe').then(
            m => m.CustomPipe,   
          ),
      },
      {
        path : 'parent-child',
        loadComponent: () =>
          import('./topics/parent-child/parent/parent').then(
            m => m.Parent,   
          ),
      }
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];