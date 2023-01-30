import { Injectable } from '@angular/core';
import {cityU, lastName, nameU, stateU, streetU} from "./utils-usa";
import {PeriodicElement} from "../../components/main/main.component";

@Injectable({
  providedIn: 'root'
})

export class UsaService {
  public result: string[] = [];
  public lastname: string[] = [];
  public house: number[] = []
  public street: string[] = [];
  public state: string[] = [];
  public city: string[] = [];
  public phone: number[] = []
  public index_f: number[] = []
  public identifier_f: number[] = []

  public phoneNumber: string[] = []
  public index: number[] = []
  public identifier: number[] = []
  public addressu: string[] = [];
  public fullname: string[] = []

  public data_usa!: PeriodicElement[]
  constructor() {
  }

public generateData() {
  //код америки +1 ххх ххх хххх
  let getRandomInt = (max: number) => Math.floor(Math.random() * Math.floor(max));
   while (this.state.length != 20) {
     let index = getRandomInt(streetU.length);
     let i = getRandomInt(nameU.length);
     let s = getRandomInt(stateU.length);
     this.result.push(nameU[i]);
     this.result = this.result.filter((v, i, arr) =>  arr.indexOf(v) == i);
     this.lastname.push(lastName[index]);
     this.lastname = this.lastname.filter((v, i, arr) =>  arr.indexOf(v) == i);
     this.street.push(streetU[index]);
     this.state.push(stateU[s]);
     this.city.push(cityU[s]);
   }
  while (this.index.length != 20) {
    let count = Math.floor(Math.random() * (99999 - 10000) ) + 10000;
    this.index.push(count);
    this.index = this.index.filter((v, i, arr) =>  arr.indexOf(v) == i);
  }
  while (this.identifier.length != 20) {
    let count = Math.floor(Math.random() * (999- 100) ) + 100;
    this.identifier.push(count);
    this.identifier = this.identifier.filter((v, i, arr) =>  arr.indexOf(v) == i);
  }
  while (this.house.length != 20) {
    let count = Math.floor(Math.random() * (300 - 1) ) + 1;
    this.house.push(count);
    this.house = this.house.filter((v, i, arr) =>  arr.indexOf(v) == i);
  }
  while (this.phone.length != 20) {
    let count = Math.floor(Math.random() * (9999999999- 2000000000) ) + 2000000000;
    this.phone.push(count);
    this.phone = this.phone.filter((v, i, arr) =>  arr.indexOf(v) == i);
  }


for ( let i = 0; i<20;i++) {
 let c: string =  this.state[i] + ' '+ this.city[i] + ',' + 'Str' + ' ' + this.street[i] + ' ' + this.house[i]
  this.addressu.push(c)
  let t: string =  this.result[i] + ' '+ this.lastname[i]
  this.fullname.push(t)
  let n: string =  '+1 '+ this.phone[i]
  this.phoneNumber.push(n)
  this.index_f.push(...this.index)
  this.identifier_f.push(...this.identifier)
}

  this.data_usa = this.generateObj(this.phoneNumber,this.index_f, this.identifier_f,this.addressu,this.fullname)

}
  public generateObj( phoneNumber: string[], index: number[], identifier: number[], addressu: string[], fullname: string[] ): PeriodicElement[] {
    let res = []
    for (let i = 0; i < phoneNumber.length; i++) {
      let tempObj = {
        index: index[i],
        identifier: identifier[i],
        name: fullname[i],
        address: addressu[i],
        phone: phoneNumber[i],
      }
      res.push(tempObj)
    }
    return res
  }
}


