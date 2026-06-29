import { Component, input, signal, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CarouselSlide {
  emoji: string;
  badge: string;
  titulo: string;
  meta: string;
  ctaLabel: string;
  gradiente: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})
export class Carousel implements OnInit, OnDestroy {
  slides = input.required<CarouselSlide[]>();
  autoplayMs = input<number>(5000);

  current = signal(0);
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.timer = setInterval(() => this.next(), this.autoplayMs());
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  goTo(i: number): void {
    const total = this.slides().length;
    this.current.set((i + total) % total);
  }

  prev(): void {
    this.goTo(this.current() - 1);
  }

  next(): void {
    this.goTo(this.current() + 1);
  }
}
