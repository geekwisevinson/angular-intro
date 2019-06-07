import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private apiEndpoint: string = 'https://www.amiiboapi.com/api/';

  get(url: string): Observable<Object> { 
    return this.http.get(this.apiEndpoint + url);
  }
}
