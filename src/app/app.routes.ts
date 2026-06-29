import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
    title: 'Qualaboa — Encontre seu próximo rolê',
  },
  // Conforme as próximas features forem criadas, adicione aqui com loadChildren:
  // {
  //   path: 'eventos',
  //   loadChildren: () => import('./features/eventos/eventos.routes').then(m => m.EVENTOS_ROUTES)
  // },
];
