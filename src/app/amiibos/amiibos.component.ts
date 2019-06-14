import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { AmiiboService } from '../services/amiibo.service';
import { AmiiboInterface } from '../interfaces/AmiiboInterface';
import { PaginationService } from '../services/pagination.service';

@Component({
  selector: 'app-amiibos',
  templateUrl: './amiibos.component.html',
  styleUrls: ['./amiibos.component.css']
})
export class AmiibosComponent implements OnInit {

  constructor(
    private amiiboService: AmiiboService,
    private paginationService: PaginationService,
    private route: ActivatedRoute
  ) { }

  amiibos: AmiiboInterface[];
  paginator: any;
  isFiltered: boolean = false;
  currentPage: number = 1;

  getAmiiboLink(head: string, tail: string): string {
    const id = head + tail;
    return `/amiibo/${id}`;
  }

  setPage(page: number): void {
    this.currentPage = page;
    const amiibos = this.amiiboService.getAmiibos();    
    this.paginator = this.paginationService.getPaginator(amiibos.length, page);
    
    if (page < 1 || page > this.paginator.pagesCount) return;

    this.amiibos = amiibos.slice(this.paginator.startIndex, this.paginator.endIndex + 1);
  }

  setAmiibos(searchText: string): void {
    if (searchText) {
      this.isFiltered = true;
      this.amiibos = this.amiiboService.getAmiibos();
    } else {
      this.isFiltered = false;
      this.setPage(this.currentPage);
    }
  }

  filterAmiibos(): void {
    const type = this.route.snapshot.queryParamMap.get('type');
    const amiiboSeries = this.route.snapshot.queryParamMap.get('amiiboSeries');
    const gameSeries = this.route.snapshot.queryParamMap.get('gameSeries');

    const filter = {type} || {amiiboSeries} || {gameSeries};

    this.amiiboService.getFilteredAmiibos(filter).subscribe((response: any) => console.log(response));
  }

  ngOnInit() {
   this.setPage(1); 
   this.filterAmiibos();
  }

}
