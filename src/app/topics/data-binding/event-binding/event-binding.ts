import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css',
})
export class EventBinding {
 count = 0;
  message = 'Click the button.';

  increaseCount(): void {
    this.count = this.count + 1;
    this.message = 'Count increased.';
  }

  resetCount(): void {
    this.count = 0;
    this.message = 'Count reset.';
  }
}
