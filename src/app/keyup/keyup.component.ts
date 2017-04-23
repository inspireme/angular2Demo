import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup',
  templateUrl: './keyup.component.html',
  styleUrls: ['./keyup.component.css']
})
export class KeyupComponent implements OnInit {

  values1 = '';
  values2 = '';
  values3 = '';

  constructor() { }

  ngOnInit() {
  }

  //  onKey(event: any) { // without type info
  //    this.values += event.target.value + ' | ';
  //  }

  onKey(event: KeyboardEvent) { // with type info
    this.values1 += (<HTMLInputElement>event.target).value + ' | ';
  }

  onKey2(value: string) {
    this.values2 += value + ' | ';
  }

  update(value: string) { this.values3 = value; }
}