import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  isFullScreen = false;

  toggleFullScreen() {
    this.isFullScreen = !this.isFullScreen;
    const elem = document.documentElement;

    if (this.isFullScreen) {
      elem.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }
}
