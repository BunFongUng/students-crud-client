import { Injectable, Inject } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {

  constructor(private http: Http, @Inject('API_URL') private apiUrl: string) { }

  getStudents(): Observable<any> {
    return this.http.get(`${this.apiUrl}students`).map((res: Response) => res.json());
  }
}
