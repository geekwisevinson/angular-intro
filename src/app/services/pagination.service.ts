import { Injectable } from '@angular/core';

import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }

  getPaginator(allItems: number, currentPage: number): object {
    const itemsOnPage = 27;
    const pagesCount: number = Math.ceil(allItems/ itemsOnPage);
    let firstPage: number, lastPage: number;

    if (currentPage <= 3) {
        firstPage = 1;
        lastPage = 5;
      } else if (currentPage + 1 >= pagesCount) {
        firstPage = pagesCount - 4;
        lastPage = pagesCount;
      } else {
        firstPage = currentPage - 2;
        lastPage = currentPage + 2;
      }

    const startIndex = (currentPage - 1) * itemsOnPage;
    const endIndex = Math.min(startIndex + itemsOnPage - 1, allItems - 1);
    const pages = _.range(firstPage, lastPage + 1);

    return {
      allItems,
      currentPage,
      itemsOnPage,
      pagesCount,
      firstPage,
      lastPage,
      startIndex,
      endIndex,
      pages
    };
  }
}
