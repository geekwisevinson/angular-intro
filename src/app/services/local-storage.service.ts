import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  get(key): any {
    return JSON.parse(localStorage.getItem(key));
  }

  set(key, value): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
