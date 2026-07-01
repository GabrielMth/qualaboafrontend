import { Component, signal, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  toggleMenu(): void {
    this.menuAberto.set(!this.menuAberto());
    this.atualizarScrollDoBody();
  }

  fecharMenu(): void {
    this.menuAberto.set(false);
    this.atualizarScrollDoBody();
  }

  // Trava o scroll do body enquanto o menu mobile está aberto.
  // Sem isso, o usuário consegue rolar a página por trás do menu fixed,
  // o que causa "ghosting" (conteúdo duplicado/sobreposto) em navegadores
  // mobile que usam backdrop-filter, como Safari iOS.
  private atualizarScrollDoBody(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    document.body.style.overflow = this.menuAberto() ? 'hidden' : '';
  }
}