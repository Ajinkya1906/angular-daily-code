import { Routes } from '@angular/router';


export const TOPICS_ROUTES: Routes = [
      // For Online Class.
      {
        path: 'data-binding/interpolation',
        loadComponent: () =>
          import('./data-binding/interpolation/interpolation').then(
            m => m.Interpolation,
          ),
      },
      {
        path: 'data-binding/property-binding',
        loadComponent: () =>
          import('./data-binding/property-binding/property-binding').then(
            m => m.PropertyBinding,
          ),
      },
      {
        path: 'data-binding/event-binding',
        loadComponent: () =>
          import('./data-binding/event-binding/event-binding').then(
            m => m.EventBinding,
          ),
      },
      {
        path: 'data-binding/two-way-binding',
        loadComponent: () =>
          import('./data-binding/two-way-binding/two-way-binding').then(
            m => m.TwoWayBinding,
          ),
      },
      {
        path: 'directive/structural-directive',
        loadComponent: () =>
          import('./directive/structural-directive/structural-directive').then(
            m => m.StructuralDirective,
          ),
      },
      {
        path: 'directive/attribute-directive',
        loadComponent: () =>
          import('./directive/attribute-directive/attribute-directive').then(
            m => m.AttributeDirective,
          ),
      },
      {
        path: 'directive/custom-directive',
        loadComponent: () =>
          import('./directive/custom-directive/custom-directive').then(
            m => m.CustomDirective,
          ),  
      },
      {
        path : 'pipe/built-in-pipe',
        loadComponent: () =>
          import('./pipe/builtin-pipe/builtin-pipe').then(
            m => m.BuiltinPipe,   
          ),
      },
      {
        path : 'pipe/custom-pipe',
        loadComponent: () =>
          import('./pipe/custom-pipe/custom-pipe').then(
            m => m.CustomPipe,   
          ),
      },
      {
        path : 'parent-child',
        loadComponent: () =>
          import('./parent-child/parent/parent').then(
            m => m.Parent,   
          ),
      },
{
   path : 'reactive-form/reactive-form1',
   loadComponent: () =>
     import('./reactive-form/reactive-form1/reactive-form1').then(
       m => m.ReactiveForm1
     ), 
},

{
   path : 'reactive-form/reactive-form2',
   loadComponent: () =>
     import('./reactive-form/reactive-form2/reactive-form2').then(
       m => m.ReactiveForm2
     ), 
},

];