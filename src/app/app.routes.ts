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

      // For Online Class.
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
      },


      //Personal Practice by Ajinkya Sakharkar
     {
        path : 'practice-avs/practice-1',
        loadComponent: () =>
          import('./topics/practise-avs/practice1/practice1').then(
            m => m.Practice1,   
          ),
      },
      {
        path : 'practice-avs/practice-2',
        loadComponent: () =>
          import('./topics/practise-avs/practice2/practice2').then(
            m => m.Practice2,   
          ),
      },
       {
        path : 'practice-avs/practice-3',
        loadComponent: () =>
          import('./topics/practise-avs/practice3/practice3').then(
            m => m.Practice3,   
          ),
      },

       {
        path : 'practice-avs/practice-4',
        loadComponent: () =>
          import('./topics/practise-avs/practice4/practice4').then(
            m => m.Practice4,   
          ),
      },
       {
        path : 'practice-avs/practice-5',
        loadComponent: () =>
          import('./topics/practise-avs/practice5/practice5').then(
            m => m.Practice5,   
          ),
      },
       {
        path : 'practice-avs/practice-6',
        loadComponent: () =>
          import('./topics/practise-avs/practice6/practice6').then(
            m => m.Practice6,   
          ),
      },
       {
        path : 'practice-avs/practice-7',
        loadComponent: () =>
          import('./topics/practise-avs/practice7/practice7').then(
            m => m.Practice7,   
          ),
      },
       {
        path : 'practice-avs/practice-8',
        loadComponent: () =>
          import('./topics/practise-avs/practice8/practice8').then(
            m => m.Practice8,   
          ),
      },
       {
        path : 'practice-avs/practice-9',
        loadComponent: () =>
          import('./topics/practise-avs/practice9/practice9').then(
            m => m.Practice9,   
          ),
      },
       {
        path : 'practice-avs/practice-10',
        loadComponent: () =>
          import('./topics/practise-avs/practice10/practice10').then(
            m => m.Practice10,   
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];