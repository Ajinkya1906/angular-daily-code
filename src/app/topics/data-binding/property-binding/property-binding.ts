import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.css',
})
export class PropertyBinding {
  imageUrl = 'https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif';
  imageAlt = 'Angular Logo';

  isButtonDisabled = false;

  disableButton(): void {
    this.isButtonDisabled = true;
  }

}
