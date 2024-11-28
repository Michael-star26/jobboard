import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobsServiceService {

  constructor(private http:HttpClient) { }
  url='https://remotive.com/api/remote-jobs'
  getJobs(){
    return this.http.get(`${this.url}`)
  }
}
