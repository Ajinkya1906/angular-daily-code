import { Topic } from './dashboard-navigation';

export const SELF_PRACTICE_NAVIGATION: readonly Topic[] = [
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
];