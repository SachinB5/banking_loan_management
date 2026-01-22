import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Application, ApplicationResponse } from './model/application.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  private http = inject(HttpClient);
  constructor() {}

  createApplication(data: Application): Observable<ApplicationResponse> {
    let url = 'https://projectapi.gerasim.in/api/Loan/AddNewApplication';
    return this.http.post<ApplicationResponse>(url, data);
  }
}
