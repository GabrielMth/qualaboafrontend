import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  menuAberto = signal(false);

  toggleMenu(): void {
    this.menuAberto.set(!this.menuAberto());
  }

  fecharMenu(): void {
    this.menuAberto.set(false);
  }
}
