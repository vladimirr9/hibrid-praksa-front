import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-and-sort',
  templateUrl: './search-and-sort.component.html',
  styleUrls: ['./search-and-sort.component.scss']
})
export class SearchAndSortComponent implements OnInit {

  constructor() { }

  order: string = 'ASC'
  sortBy: string = ''
  @Output() valuesChanged = new EventEmitter()
  ngOnInit(): void {
  }

  passValues() {
    let values = {order: this.order, sortBy: this.sortBy}
    this.valuesChanged.emit(values)
  }

}
