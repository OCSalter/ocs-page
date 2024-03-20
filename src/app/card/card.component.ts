import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Output() clickedEvent = new EventEmitter<void>();

  onClick(): void { this.clickedEvent.emit() }
}
