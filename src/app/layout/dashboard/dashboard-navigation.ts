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
];