import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full', },
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', component: ContainerComponent },
      { path: 'Home', component: ContainerComponent },
    ],
  },
  { path: '**', redirectTo: 'Home' }
];

export const AppRoutes = RouterModule.forRoot(routes);
