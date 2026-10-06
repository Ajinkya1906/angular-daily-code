export interface Lesson {
  readonly id: string;
  readonly title: string;
  readonly route?: string;
}

export interface Topic {
  readonly id: string;
  readonly title: string;
  readonly symbol: string;
  readonly lessons: readonly Lesson[];
}

export const DASHBOARD_TOPICS: readonly Topic[] = [
  {
    id: 'self-practice',
    title: 'Self Practice',
    symbol: '⌘',
    lessons: [
      {
        id: 'data-binding-practice',
        title: 'Data Binding Practice',
        route: '/dashboard/self-practice/data-binding-practice',
      },
      {
        id: 'directive-practice',
        title: 'Directive Practice',
        route: '/dashboard/self-practice/directive-practice',
      },
    ],
  },
  {
  id: 'practice-avs',
  title: 'Practice-AVS',
  symbol: '🧪',
  lessons: [
    {
      id: 'practice-1',
      title: 'Reactive Form1',
      route: '/dashboard/practice-avs/practice-1',
    },
    {
      id: 'practice-2',
      title: 'Template Driven 1',
      route: '/dashboard/practice-avs/practice-2',
    },
    {
      id: 'practice-3',
      title: 'Practice-3',
      route: '/dashboard/practice-avs/practice-3',
    },
    {
      id: 'practice-4',
      title: 'Practice-4',
      route: '/dashboard/practice-avs/practice-4',
    },
    {
      id: 'practice-5',
      title: 'Practice-5',
      route: '/dashboard/practice-avs/practice-5',
    },
    {
      id: 'practice-6',
      title: 'Practice-6',
      route: '/dashboard/practice-avs/practice-6',
    },
    {
      id: 'practice-7',
      title: 'Practice-7',
      route: '/dashboard/practice-avs/practice-7',
    },
    {
      id: 'practice-8',
      title: 'Practice-8',
      route: '/dashboard/practice-avs/practice-8',
    },
    {
      id: 'practice-9',
      title: 'Practice-9',
      route: '/dashboard/practice-avs/practice-9',
    },
    {
      id: 'practice-10',
      title: 'Practice-10',
      route: '/dashboard/practice-avs/practice-10',
    },
    {
      id: 'practice-11',
      title: 'Practice-11',
      route: '/dashboard/practice-avs/practice-11',
    },
    {
      id: 'practice-12',
      title: 'Practice-12',
      route: '/dashboard/practice-avs/practice-12',
    },
    {
      id: 'practice-13',
      title: 'Practice-13',
      route: '/dashboard/practice-avs/practice-13',
    },
    {
      id: 'practice-14',
      title: 'Practice-14',
      route: '/dashboard/practice-avs/practice-14',
    },
    {
      id: 'practice-15',
      title: 'Practice-15',
      route: '/dashboard/practice-avs/practice-15',
    },
    {
      id: 'practice-16',
      title: 'Practice-16',
      route: '/dashboard/practice-avs/practice-16',
    },
    {
      id: 'practice-17',
      title: 'Practice-17',
      route: '/dashboard/practice-avs/practice-17',
    },
    {
      id: 'practice-18',
      title: 'Practice-18',
      route: '/dashboard/practice-avs/practice-18',
    },
    {
      id: 'practice-19',
      title: 'Practice-19',
      route: '/dashboard/practice-avs/practice-19',
    },
    {
      id: 'practice-20',
      title: 'Practice-20',
      route: '/dashboard/practice-avs/practice-20',
    },
    {
      id: 'practice-21',
      title: 'Practice-21',
      route: '/dashboard/practice-avs/practice-21',
    },
    {
      id: 'practice-22',
      title: 'Practice-22',
      route: '/dashboard/practice-avs/practice-22',
    },
    {
      id: 'practice-23',
      title: 'Practice-23',
      route: '/dashboard/practice-avs/practice-23',
    },
    {
      id: 'practice-24',
      title: 'Practice-24',
      route: '/dashboard/practice-avs/practice-24',
    },
    {
      id: 'practice-25',
      title: 'Practice-25',
      route: '/dashboard/practice-avs/practice-25',
    },
    {
      id: 'practice-26',
      title: 'Practice-26',
      route: '/dashboard/practice-avs/practice-26',
    },
    {
      id: 'practice-27',
      title: 'Practice-27',
      route: '/dashboard/practice-avs/practice-27',
    },
    {
      id: 'practice-28',
      title: 'Practice-28',
      route: '/dashboard/practice-avs/practice-28',
    },
    {
      id: 'practice-29',
      title: 'Practice-29',
      route: '/dashboard/practice-avs/practice-29',
    },
    {
      id: 'practice-30',
      title: 'Practice-30',
      route: '/dashboard/practice-avs/practice-30',
    },
  ],
},
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
      },
      {
        id: 'reactive-form-3',
        title: 'Reactive Form 3',
        route: '/dashboard/reactive-form/reactive-form3',
      },
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