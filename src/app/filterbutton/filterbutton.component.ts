import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-filterbutton',
  templateUrl: './filterbutton.component.html',
  styleUrls: ['./filterbutton.component.css']
})
export class FilterbuttonComponent implements OnInit {
  @Input() public filterData;
  @Output() filterEmployees:EventEmitter<any>= new EventEmitter()
  constructor() { }
  sendFilterValue(selectedFilter){
    this.filterEmployees.emit(selectedFilter);
  }
  ngOnInit(): void {
  }

}
