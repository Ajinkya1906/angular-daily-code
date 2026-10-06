import { Routes } from '@angular/router';


export const SELF_PRACTICE_ROUTES: Routes = [
      {
        path: 'self-practice/data-binding-practice',
        loadComponent: () =>
          import(
            './data-binding-practice/data-binding-practice'
          ).then(m => m.DataBindingPractice),
      },
      {
        path: 'self-practice/directive-practice',
        loadComponent: () =>
          import(
            './directive-practice/directive-practice'
          ).then(m => m.DirectivePractice),
      },
];