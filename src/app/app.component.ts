import { Component } from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  tickets: Array<any>;

  constructor(private _dataService: DataService){
    this._dataService.getTickets()
    .subscribe((res) => {this.tickets = res})
  }
}
