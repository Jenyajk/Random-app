import { Component } from '@angular/core';
import {UsaService} from "../../core/usa/usa.service";



export interface PeriodicElement {
  index: number;
  identifier: number;
  name: string;
  address: string;
  phone: string
}

const USER_DATA: PeriodicElement[] = [
  {index: 1, identifier: 123, name: '1.0079', address: 'H', phone: 'H'},

];

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  public dataSource!: PeriodicElement[]
  public displayedColumns!: string[]
  public result: string[] = [];
  public index: number[] = []
  //код америки +1 ххх ххх хххх
  disabled = false;
  max = 10;
  min = 0;
  showTicks = false;
  step = 0.5;
  thumbLabel = false;
  value = 0;
  fileName: any;
  sourcePath: any;

  constructor(private usa: UsaService) {}


  public  generate() {
    this.displayedColumns = ['position', 'name', 'weight', 'symbol', 'phone'];
    return  this.dataSource = USER_DATA;
  }

  public randomName():void {
this.usa.generateData()
  }

  public downloadCSV(){

  }


}
