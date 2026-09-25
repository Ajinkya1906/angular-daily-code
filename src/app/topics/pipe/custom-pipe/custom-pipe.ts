import { Component } from '@angular/core';
import { ReversePipe } from './reverse-pipe';

@Component({
  selector: 'app-custom-pipe',
  imports: [ReversePipe],
  templateUrl: './custom-pipe.html',
  styleUrl: './custom-pipe.css',
})
export class CustomPipe {
  text : string = 'ABC';
}
