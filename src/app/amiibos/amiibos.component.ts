import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AmiiboService } from '../services/amiibo.service';
import { AmiiboInterface } from '../interfaces/AmiiboInterface';
import { PaginationService } from '../services/pagination.service';

@Component({
  selector: 'app-amiibos',
  templateUrl: './amiibos.component.html',
  styleUrls: ['./amiibos.component.css']
})
export class AmiibosComponent implements OnInit {

  constructor(private amiiboService: AmiiboService, private paginationService: PaginationService) { }

  amiibos: AmiiboInterface[];
  paginator: any;

  getAmiiboLink(head: string, tail: string): string {
    const id = head + tail;
    return `/amiibo/${id}`;
  }

  setPage(page: number): void {
    const amiibos = this.amiiboService.getAmiibos();    
    this.paginator = this.paginationService.getPaginator(amiibos.length, page);
    console.log(this.paginator);
    
    if (page < 1 || page > this.paginator.pagesCount) return;

    this.amiibos = amiibos.slice(this.paginator.startIndex, this.paginator.endIndex + 1);
  }

  ngOnInit() {
   this.setPage(1); 
  }

}
