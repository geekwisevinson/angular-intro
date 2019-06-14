import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ApiService } from '../services/api.service';
import { LocalStorageService } from '../services/local-storage.service';
import { AmiiboInterface } from '../interfaces/AmiiboInterface';

@Injectable({
  providedIn: 'root'
})
export class AmiiboService {

  constructor(private api: ApiService, private localStorageService: LocalStorageService) { }

  getAmiibos(): AmiiboInterface[] {
    const amiibos = this.localStorageService.get('amiibos');
    if (amiibos) {
      return amiibos;
    }
    let amiibosFromApi;
    this.api.get('amiibo/').subscribe((response: any) => {
      amiibosFromApi = response.amiibo;
      this.localStorageService.set('amiibos', amiibosFromApi);
    });
    return amiibosFromApi;
  }

  getAmiibo(id: string): Observable<Object> {
    return this.api.get(`amiibo/?id=${id}`);
  }
}
