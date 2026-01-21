import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApplicationListComponent } from './application-list/application-list.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ApplicationListComponent,LoanApplicationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'loan_management';
}
