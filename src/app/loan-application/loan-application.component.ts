import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Application } from '../model/application.model';

@Component({
  selector: 'app-loan-application',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './loan-application.component.html',
  styleUrl: './loan-application.component.css',
})
export class LoanApplicationComponent implements OnInit {
  applicationForm = new FormGroup({
    applicantID: new FormControl(),
    fullName: new FormControl(),
    applicationStatus: new FormControl(),
    panCard: new FormControl(),
    dateOfBirth: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    address: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    zipCode: new FormControl(),
    annualIncome: new FormControl(),
    employmentStatus: new FormControl(),
    creditScore: new FormControl(),
    assets: new FormControl(),
    dateApplied: new FormControl(),
    Loans: new FormControl(),
    customerId: new FormControl(),
  });

  loanForm = new FormGroup({
    loanID: new FormControl(),
    applicantID: new FormControl(),
    bankName: new FormControl(),
    loanAmount: new FormControl(),
    emi: new FormControl(),
  });

  
  ngOnInit(): void {}
  onSubmitLoan() {
  }
}
