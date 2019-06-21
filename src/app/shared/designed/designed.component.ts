import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-designed',
  templateUrl: './designed.component.html',
  styleUrls: ['./designed.component.css']
})
export class DesignedComponent implements OnInit {
  @Input() public title = 'I am default text';
  @Output() public changed: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public onClick() {
    this.changed.emit('this is from a custom emit');
  }
}
