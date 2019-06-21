import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  public myVar = 'I am from the parent Component';
  constructor() { }

  ngOnInit() {
    this.myVar = 'after time i changed'
  }

  public onChanged(event) {
    this.myVar = event;
  }

}
