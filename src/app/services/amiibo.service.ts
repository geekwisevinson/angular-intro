import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ApiService } from '../services/api.service';
import { LocalStorageService } from '../services/local-storage.service';
import { AmiiboInterface } from '../interfaces/AmiiboInterface';

@Injectable({
  providedIn: 'root'
})
export class AmiiboService {
  public database: AmiiboInterface[];
  constructor(private api: ApiService, private localStorageService: LocalStorageService) {
    const amiibos = this.localStorageService.get('amiibos');
  }

  getAmiibos(): AmiiboInterface[] {
    const amiibos = this.localStorageService.get('amiibos');
    if (amiibos) {
      this.database = amiibos;
      console.log('getAmiibos', amiibos);
      return amiibos;
    }
    let amiibosFromApi;
    this.api.get('amiibo/').subscribe((response: any) => {
      amiibosFromApi = response.amiibo;
      this.localStorageService.set('amiibos', amiibosFromApi);
    });
    console.log(amiibosFromApi);
    return amiibosFromApi;
  }

  getFilteredAmiibos(filter: object): AmiiboInterface[]{
    const amiibos = this.localStorageService.get('amiibos');
    const key = Object.keys(filter)[0];
    const value = filter[key];
    if (amiibos) {
      this.database = amiibos;
      const filteredAmiibos = this.database.filter( item => {
        return (item[key] === value);
      });
      console.log('key', key, 'value', value);
      console.log('filteredAmiibos', filteredAmiibos);
      return filteredAmiibos;
    }
    this.getFilteredAmiibosFromApi(key, value).subscribe( filteredAmiibos => {
      return filteredAmiibos;
    });
  }
  private getFilteredAmiibosFromApi(key: string, value: string): Observable<object> {
    return this.api.get(`amiibo/?${key}=${value}`);
  }

  public getAmiibo(id: string): AmiiboInterface {
    const amiibos = this.localStorageService.get('amiibos');
    if (amiibos) {
      this.database = amiibos;
      const singleAmiibo = this.database.filter( item => {
        return (id === item.head + item.tail);
      })[0];
      console.log('getAmiibo', singleAmiibo);
      return singleAmiibo;
    }
    this.getAmiiboFromApi(id).subscribe( amiibo => {
      return amiibo;
    });
  }
  private getAmiiboFromApi(id: string): Observable<object> {
    console.log(id);
    const sub = this.api.get(`amiibo/?id=${id}`);
    sub.subscribe( amiibo => {
      console.log(amiibo)
    });
    return sub;
  }
}
