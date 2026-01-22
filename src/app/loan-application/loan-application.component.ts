import { Component, inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  Application,
  ApplicationResponse,
  Loans,
} from '../model/application.model';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-loan-application',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './loan-application.component.html',
  styleUrl: './loan-application.component.css',
})
export class LoanApplicationComponent implements OnInit {
  private applicationService = inject(ApplicationService);
  application = new Application();
  loans = new Loans();

  applicationForm = new FormGroup({
    applicantID: new FormControl(this.application.applicantID),
    fullName: new FormControl(this.application.fullName),
    applicationStatus: new FormControl(this.application.applicationStatus),
    panCard: new FormControl(this.application.panCard),
    dateOfBirth: new FormControl(this.application.dateOfBirth),
    email: new FormControl(this.application.email),
    phone: new FormControl(this.application.phone),
    address: new FormControl(this.application.address),
    city: new FormControl(this.application.city),
    state: new FormControl(this.application.state),
    zipCode: new FormControl(this.application.zipCode),
    annualIncome: new FormControl(this.application.annualIncome),
    employmentStatus: new FormControl(this.application.employmentStatus),
    creditScore: new FormControl(this.application.creditScore),
    assets: new FormControl(this.application.assets),
    dateApplied: new FormControl(this.application.dateApplied),
    Loans: new FormControl(this.application.Loans),
    customerId: new FormControl(this.application.customerId),
  });

  loanForm = new FormGroup({
    loanID: new FormControl(this.loans.loanID),
    applicantID: new FormControl(this.loans.applicantID),
    bankName: new FormControl(this.loans.bankName),
    loanAmount: new FormControl(this.loans.loanAmount),
    emi: new FormControl(this.loans.emi),
  });

  ngOnInit(): void {}
  onSubmitLoan() {
    const loanData = this.loanForm.value as Loans;

    //on every add i ll be incementing the id
    loanData.loanID = ++loanData.loanID;
    loanData.applicantID = loanData.applicantID++;

    this.application.Loans.push(loanData);
    this.loanForm.reset();
    console.log('Loans Array:', this.application.Loans);
  }

  onSubmit() {
    const finalData: Application = {
      ...this.applicationForm.value,
      Loans: this.application.Loans, // Ensure the manual array is attached
    } as Application;

    this.applicationService.createApplication(finalData).subscribe({
      next: (response: ApplicationResponse) => {
        if (response.Result) {
          // Assuming 'result' is the success flag in your model
          alert('Application successfully updated!');
          this.applicationForm.reset();
          this.application.Loans = []; // Clear the local array after success
        } else {
          alert('Update failed: ' + response.Message);
        }
      },
      error: (err) => {
        console.error('API Error:', err);
        alert('An error occurred while submitting the application.');
      },
    });
  }
}
