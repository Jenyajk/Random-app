import {Component, OnChanges, OnInit} from '@angular/core';
import {UsaService} from "../../core/usa/usa.service";
import {KoreaService} from "../../core/korea/korea.service";




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

export class MainComponent implements OnInit{
  public dataSource!: PeriodicElement[]
  public displayedColumns!: string[]
  public result: string[] = [];
  public index: number[] = [];
  public phonenumber: string = ''
  favoriteSeason: string = 'USA'
  seasons: string[] = ['USA', 'RUSSIA', 'SOUTH KOREA'];

  disabled = false;
  max = 10;
  min = 0;
  showTicks = false;
  step = 0.5;
  thumbLabel = false;
  value = 0;
  fileName: any;
  sourcePath: any;

  constructor(private usa: UsaService, private korea: KoreaService) {}


  public  generate() {
    this.displayedColumns = ['position', 'name', 'weight', 'symbol', 'phone'];
    if (this.favoriteSeason === 'USA') {
      this.usa.generateData()
      this.dataSource = this.usa.data_usa
    } else if (this.favoriteSeason === 'SOUTH KOREA') {
      this.korea.generateData()
      this.dataSource = this.korea.data_korea
    } else  {
      console.log('ddd')
    }
  }


  public downloadCSV(){}

  ngOnInit() {
    this.generate()


  }


}


