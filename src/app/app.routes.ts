import { Routes } from '@angular/router';
import { ApplicationListComponent } from './application-list/application-list.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';

export const routes: Routes = [
  {
    path: '**',
    redirectTo: 'loan-application',
    pathMatch: 'full',
  },
  {
    path: 'application-list',
    component: ApplicationListComponent,
  },
  {
    path: 'loan-application',
    component: LoanApplicationComponent,
  },
];
