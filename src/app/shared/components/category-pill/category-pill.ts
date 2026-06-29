import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-category-pill',
  standalone: true,
  templateUrl: './category-pill.html',
  styleUrl: './category-pill.scss',
})
export class CategoryPill {
  icon = input.required<string>();
  label = input.required<string>();
  active = input<boolean>(false);
  selected = output<void>();
}
