import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Evento } from '../../../core/models/evento.model';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './event-card.html',
  styleUrl: './event-card.scss',
})
export class EventCard {
  // signal inputs (padrão Angular 22)
  evento = input.required<Evento>();
  featured = input<boolean>(false);

  get badgeLabel(): string | null {
    switch (this.evento().badge) {
      case 'HOT':
        return '🔥 Hot';
      case 'NOVO':
        return 'Novo';
      case 'GRATIS':
        return 'Grátis';
      default:
        return null;
    }
  }

  get badgeClass(): string {
    switch (this.evento().badge) {
      case 'HOT':
        return 'b-hot';
      case 'NOVO':
        return 'b-new';
      case 'GRATIS':
        return 'b-free';
      default:
        return '';
    }
  }
}
