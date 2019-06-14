import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AmiiboInterface } from '../interfaces/AmiiboInterface';
import { AmiiboService } from '../services/amiibo.service';

@Component({
  selector: 'app-individual-amiibo',
  templateUrl: './individual-amiibo.component.html',
  styleUrls: ['./individual-amiibo.component.css']
})
export class IndividualAmiiboComponent implements OnInit {

  constructor(private router: ActivatedRoute, private amiiboService: AmiiboService) { }

  amiibo: AmiiboInterface;

  setAmiibo() {
    const id: string = this.router.snapshot.paramMap.get('id');
    return this.amiiboService.getAmiibo(id).subscribe((response: any) => this.amiibo = response.amiibo);
  }

  ngOnInit() {
    this.setAmiibo();
  }

}
