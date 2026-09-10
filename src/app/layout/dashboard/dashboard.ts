import { Component, computed, inject, signal } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

import { DASHBOARD_TOPICS } from './dashboard-navigation';
import type { Lesson, Topic } from './dashboard-navigation';
import { Theme } from '../../core/theme/theme';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  readonly theme = inject(Theme);
  private readonly router = inject(Router);

  // Sidebar is open by default
  readonly sidebarOpen = signal(true);
  readonly search = signal('');

  // Controls which main topic is expanded
  readonly openTopics = signal<readonly string[]>(['data-binding']);

  readonly filteredTopics = computed<readonly Topic[]>(() => {
    const query = this.search().trim().toLowerCase();

    if (!query) {
      return DASHBOARD_TOPICS;
    }

    return DASHBOARD_TOPICS
      .map((topic: Topic): Topic => ({
        ...topic,
        lessons: topic.title.toLowerCase().includes(query)
          ? topic.lessons
          : topic.lessons.filter((lesson: Lesson) =>
              lesson.title.toLowerCase().includes(query),
            ),
      }))
      .filter((topic: Topic) => topic.lessons.length > 0);
  });

  toggleTopic(topicId: string): void {
    this.openTopics.update(openTopics =>
      openTopics.includes(topicId)
        ? openTopics.filter(id => id !== topicId)
        : [...openTopics, topicId],
    );
  }

  isTopicOpen(topicId: string): boolean {
    return this.openTopics().includes(topicId);
  }

  closeSidebarOnMobile(): void {
    if (window.innerWidth <= 720) {
      this.sidebarOpen.set(false);
    }
  }

  closeSidebar(): void {
  this.sidebarOpen.set(false);
}

openSidebar(): void {
  this.sidebarOpen.set(true);
}


readonly searchResults = computed(() => {
  const query = this.search().trim().toLowerCase();

  if (!query) {
    return [];
  }

  return DASHBOARD_TOPICS.flatMap(topic =>
    topic.lessons
      .filter(lesson => lesson.title.toLowerCase().includes(query))
      .map(lesson => ({
        ...lesson,
        topicTitle: topic.title,
      })),
  );
});

selectLesson(route?: string): void {
  if (!route) {
    return;
  }

  this.router.navigateByUrl(route);
  this.search.set('');
  this.closeSidebarOnMobile();
}
}