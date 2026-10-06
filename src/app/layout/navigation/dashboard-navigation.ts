import { AVS_NAVIGATION } from './avs-navigation';
import { SELF_PRACTICE_NAVIGATION } from './self-practice-navigation';
import { SESSION_TOPICS_NAVIGATION } from './session-topics-nagivation';

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
    ...SELF_PRACTICE_NAVIGATION, 
    ...AVS_NAVIGATION,  
    ...SESSION_TOPICS_NAVIGATION
];