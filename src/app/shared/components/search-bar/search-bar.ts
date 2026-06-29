import { Component, signal, computed, ElementRef, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CIDADES } from '../../../core/data/cidades.data';
import { Cidade } from '../../../core/models/cidade.model';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
})
export class SearchBar {
  private router = inject(Router);
  private elRef = inject(ElementRef);

  termo = signal('');
  cidadeSelecionada = signal<string>('Perto de mim');
  dropdownAberto = signal(false);
  filtroCidade = signal('');

  cidadesFiltradas = computed<Cidade[]>(() => {
    const q = this.filtroCidade().trim().toLowerCase();
    if (!q) return CIDADES;
    return CIDADES.filter(
      (c) => c.nome.toLowerCase().includes(q) || c.estado.toLowerCase().includes(q)
    );
  });

  // Agrupa por letra inicial, igual ao comportamento original do template
  gruposPorLetra = computed(() => {
    const groups: Record<string, Cidade[]> = {};
    for (const cidade of this.cidadesFiltradas()) {
      const letra = cidade.nome[0].toUpperCase();
      (groups[letra] ??= []).push(cidade);
    }
    return Object.keys(groups)
      .sort()
      .map((letra) => ({ letra, cidades: groups[letra] }));
  });

  toggleDropdown(): void {
    this.dropdownAberto.set(!this.dropdownAberto());
    if (this.dropdownAberto()) this.filtroCidade.set('');
  }

  selecionarCidade(cidade: Cidade): void {
    this.cidadeSelecionada.set(cidade.nome);
    this.dropdownAberto.set(false);
  }

  buscar(): void {
    this.router.navigate(['/buscar'], {
      queryParams: { q: this.termo() || null, cidade: this.cidadeSelecionada() },
    });
  }

  // Fecha o dropdown ao clicar fora — substitui o listener manual no document
  @HostListener('document:click', ['$event'])
  onClickFora(event: MouseEvent): void {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.dropdownAberto.set(false);
    }
  }
}
