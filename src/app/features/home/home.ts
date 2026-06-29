import { Component, signal } from '@angular/core';
import { EventCard } from '../../shared/components/event-card/event-card';
import { SearchBar } from '../../shared/components/search-bar/search-bar';
import { CategoryPill } from '../../shared/components/category-pill/category-pill';
import { Carousel, CarouselSlide } from '../../shared/components/carousel/carousel';
import { Evento } from '../../core/models/evento.model';

interface Categoria {
  icon: string;
  label: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EventCard, SearchBar, CategoryPill, Carousel],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  // TODO: substituir pelos dados reais vindos do EventoService (API Spring Boot)
  slides: CarouselSlide[] = [
    {
      emoji: '🎸',
      badge: '🔥 Mais vendido',
      titulo: 'Rock the Mountain 2026',
      meta: 'Petrópolis · RJ · 06 a 09 de Novembro',
      ctaLabel: 'Ver ingressos',
      gradiente: 'linear-gradient(135deg, #FF4D00 0%, #E8000D 60%, #7B00FF 100%)',
    },
    {
      emoji: '🎪',
      badge: 'Novo',
      titulo: 'Festival de Inverno SP 2026',
      meta: 'Parque Ibirapuera · SP · 15 a 18 de Julho',
      ctaLabel: 'Ver ingressos',
      gradiente: 'linear-gradient(135deg, #00C94D 0%, #0066FF 100%)',
    },
    {
      emoji: '🌿',
      badge: 'Grátis',
      titulo: 'Feira Verde Assis',
      meta: 'Assis · SP · Todo sábado',
      ctaLabel: 'Saiba mais',
      gradiente: 'linear-gradient(135deg, #FFE600 0%, #FF4D00 100%)',
    },
    {
      emoji: '🎭',
      badge: 'Arte',
      titulo: 'Expo Arte Urbana 2026',
      meta: 'Rio de Janeiro · RJ · Julho 2026',
      ctaLabel: 'Ver evento',
      gradiente: 'linear-gradient(135deg, #7B00FF 0%, #E8000D 100%)',
    },
  ];

  categorias: Categoria[] = [
    { icon: '✦', label: 'Todos' },
    { icon: '🎵', label: 'Shows e Festivais' },
    { icon: '🌿', label: 'Feiras' },
    { icon: '🎭', label: 'Teatro e Arte' },
    { icon: '⚡', label: 'Festas' },
    { icon: '🏆', label: 'Esportes' },
    { icon: '😂', label: 'Stand-up' },
    { icon: '🍔', label: 'Gastronomia' },
  ];

  categoriaAtiva = signal('Todos');

  eventos: Evento[] = [
    {
      id: '1',
      titulo: 'Rock the Mountain — 2º Final de Semana',
      categoria: 'Festival · Rock',
      emoji: '🎸',
      cidade: 'Petrópolis',
      estado: 'RJ',
      dataInicio: '2026-11-06',
      preco: 380,
      badge: 'HOT',
      destaque: true,
    },
    {
      id: '2',
      titulo: 'Noite de Stand-up SP',
      categoria: 'Stand-up',
      emoji: '😂',
      cidade: 'São Paulo',
      estado: 'SP',
      dataInicio: '2026-06-22',
      preco: 60,
      badge: 'NOVO',
    },
    {
      id: '3',
      titulo: 'Expo Arte Urbana 2026',
      categoria: 'Arte · Exposição',
      emoji: '🎨',
      cidade: 'Rio de Janeiro',
      estado: 'RJ',
      dataInicio: '2026-07-10',
      preco: null,
    },
    {
      id: '4',
      titulo: 'Feira Verde Assis',
      categoria: 'Feira · Sustentável',
      emoji: '🌿',
      cidade: 'Assis',
      estado: 'SP',
      dataInicio: '2026-07-04',
      preco: null,
      badge: 'GRATIS',
    },
    {
      id: '5',
      titulo: 'Rave do Cerrado',
      categoria: 'Festa · Eletrônico',
      emoji: '🎉',
      cidade: 'Brasília',
      estado: 'DF',
      dataInicio: '2026-07-05',
      preco: 120,
    },
  ];

  selecionarCategoria(label: string): void {
    this.categoriaAtiva.set(label);
    // TODO: disparar filtro real via EventoService quando a API estiver pronta
  }
}
