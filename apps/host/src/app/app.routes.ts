import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'investigator-dashboard',
    loadChildren: () =>
      import('investigator-dashboard/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'public-reporting-system',
    loadChildren: () =>
      import('public-reporting-system/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
