import { Injectable } from '@angular/core';
import {PeriodicElement} from "../../components/main/main.component";
import {cityR, lastR, nameR, streetR} from "./utils-russia";

@Injectable({
  providedIn: 'root'
})
export class RussiaService {
  public result: string[] = [];
  public lastname: string[] = [];
  public house: number[] = []
  public street: string[] = [];
  public home: number[] = [];
  public city: string[] = [];
  public phone: number[] = []
  public index_f: number[] = []
  public identifier_f: number[] = []

  public phoneNumber: string[] = []
  public index: number[] = []
  public identifier: number[] = []
  public address: string[] = [];
  public fullname: string[] = []

  public data_russia!: PeriodicElement[]

  public generateData() {

    let getRandomInt = (max: number) => Math.floor(Math.random() * Math.floor(max));
    while (this.city.length != 20) {
      let n = getRandomInt(streetR.length);
      let p = getRandomInt(cityR.length);
      let i = getRandomInt(nameR.length);
      let s = getRandomInt(lastR.length);
      this.result.push(nameR[i]);
      this.result = this.result.filter((v, i, arr) =>  arr.indexOf(v) == i);
      this.lastname.push(lastR[s]);
      this.lastname = this.lastname.filter((v, i, arr) =>  arr.indexOf(v) == i);
      this.street.push(streetR[n]);
      this.city.push(cityR[p]);
    }
    while (this.index.length != 20) {
      let count = Math.floor(Math.random() * (999999 - 100000) ) + 100000;
      this.index.push(count);
      this.index = this.index.filter((v, i, arr) =>  arr.indexOf(v) == i);
    }
    while (this.identifier.length != 20) {
      let count = Math.floor(Math.random() * (9999- 1000) ) + 1000;
      this.identifier.push(count);
      this.identifier = this.identifier.filter((v, i, arr) =>  arr.indexOf(v) == i);
    }
    while (this.house.length != 20) {
      let count = Math.floor(Math.random() * (300 - 1) ) + 1;
      this.house.push(count);
      this.house = this.house.filter((v, i, arr) =>  arr.indexOf(v) == i);
      let c = Math.floor(Math.random() * (200 - 1) ) + 1;
      this.home.push(c);
      let o = Math.floor(Math.random() * (9999999999- 2000000000) ) + 2000000000;
      this.phone.push(o);
      this.phone = this.phone.filter((v, i, arr) =>  arr.indexOf(v) == i);
    }

    for ( let i = 0; i<20;i++) {
      let c: string = this.city[i] + ','  + this.street[i] + ' ' +'д.' + this.house[i] + ' ' + 'кв.'+ this.home[i]
      this.address.push(c)
      let t: string =  this.result[i] + ' '+ this.lastname[i]
      this.fullname.push(t)
      let n: string =  '+7 '+ this.phone[i]
      this.phoneNumber.push(n)
      this.index_f.push(...this.index)
      this.identifier_f.push(...this.identifier)
    }

    this.data_russia = this.generateObj(this.phoneNumber,this.index_f, this.identifier_f,this.address,this.fullname)

  }
  public generateObj( phoneNumber: string[], index: number[], identifier: number[], address: string[], fullname: string[] ): PeriodicElement[] {
    let res = []
    for (let i = 0; i < phoneNumber.length; i++) {
      let tempObj = {
        index: index[i],
        identifier: identifier[i],
        name: fullname[i],
        address: address[i],
        phone: phoneNumber[i],
      }
      res.push(tempObj)
    }
    return res
  }
}
