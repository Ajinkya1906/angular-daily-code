import { Topic } from './dashboard-navigation';

export const SESSION_TOPICS_NAVIGATION: readonly Topic[] = [
  {
    id: 'data-binding',
    title: 'Data Binding',
    symbol: '↔',
    lessons: [
      {
        id: 'interpolation',
        title: 'Interpolation',
        route: '/dashboard/data-binding/interpolation',
      },
      {
        id: 'property-binding',
        title: 'Property Binding',
        route: '/dashboard/data-binding/property-binding',
      },
      {
        id: 'event-binding',
        title: 'Event Binding',
        route: '/dashboard/data-binding/event-binding',
      },
      {
        id: 'two-way-binding',
        title: 'Two-way Binding',
        route: '/dashboard/data-binding/two-way-binding',
      },
    ],
  },
  {
  id: 'directive',
  title: 'Directive',
  symbol: '⚙',
  lessons: [
    {
      id: 'attribute-directive',
      title: 'Attribute Directive',
      route: '/dashboard/directive/attribute-directive',
    },
    {
      id: 'structural-directive',
      title: 'Structural Directive',
      route: '/dashboard/directive/structural-directive',
    },
    {
      id: 'custom-directive',
      title: 'Custom Directive',
      route: '/dashboard/directive/custom-directive',
    },
  ],
},
   {
    id: 'pipe',
    title: 'Pipe',
    symbol: '|',
    lessons: [
      {
        id: 'built-in-pipe',
        title: 'Built-in Pipe',
        route: '/dashboard/pipe/built-in-pipe',
      },
      {
        id: 'custom-pipe',
        title: 'Custom Pipe',
        route: '/dashboard/pipe/custom-pipe',
      },
    ],
  },

  {
    id: 'parent-child',
    title: 'Parent Child',
    symbol: '⇄',
    lessons: [
      {
        id: 'parent-child',
        title: 'Parent Child',
        route: '/dashboard/parent-child',
      },
    ],
  },

  {
    id: 'reactive-form',
    title: 'Reactive Form',
    symbol: '▣',
    lessons: [
      {
        id: 'reactive-form-1',
        title: 'Reactive Form 1',
        route: '/dashboard/reactive-form/reactive-form1',
      },
      {
        id: 'reactive-form-2',
        title: 'Reactive Form 2',
        route: '/dashboard/reactive-form/reactive-form2',
      }
    ],
  },

  {
    id: 'template-driven-form',
    title: 'Template Driven Form',
    symbol: '▤',
    lessons: [
      {
        id: 'template-driven-form-1',
        title: 'Template Driven Form 1',
        route: '/dashboard/template-driven-form/template-driven-form-1',
      },
      {
        id: 'template-driven-form-2',
        title: 'Template Driven Form 2',
        route: '/dashboard/template-driven-form/template-driven-form-2',
      },
      {
        id: 'template-driven-form-3',
        title: 'Template Driven Form 3',
        route: '/dashboard/template-driven-form/template-driven-form-3',
      },
    ],
  },
];