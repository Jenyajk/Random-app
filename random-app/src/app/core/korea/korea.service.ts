import { Injectable } from '@angular/core';
import {PeriodicElement} from "../../components/main/main.component";
import {cityU, lastName, nameU, stateU, streetU} from "../usa/utils-usa";
import {addressK, lastK, nameK} from "./utils-korea";

@Injectable({
  providedIn: 'root'
})
export class KoreaService {
  public result: string[] = [];
  public lastname: string[] = [];
  public house: number[] = []
  public street: string[] = [];
  public phone: number[] = []
  public index_f: number[] = []
  public identifier_f: number[] = []

  public phoneNumber: string[] = []
  public index: number[] = []
  public identifier: number[] = []
  public addressu: string[] = [];
  public fullname: string[] = []

  public data_korea!: PeriodicElement[]
  constructor() {
  }

  public generateData() {

    let getRandomInt = (max: number) => Math.floor(Math.random() * Math.floor(max));
    while (this.result.length != 20) {
      let index = getRandomInt(lastK.length);
      let a = getRandomInt(nameK.length);
      let s = getRandomInt(addressK.length);
      this.result.push(nameK[a]);
      this.result = this.result.filter((v, i, arr) =>  arr.indexOf(v) == i);
      this.lastname.push(lastK[index]);
      this.street.push(addressK[s]);
      this.street = this.street.filter((v, i, arr) =>  arr.indexOf(v) == i)
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
    while (this.phone.length != 20) {
      let count = Math.floor(Math.random() * (9999999999- 2000000000) ) + 2000000000;
      this.phone.push(count);
      this.phone = this.phone.filter((v, i, arr) =>  arr.indexOf(v) == i);
    }


    for ( let i = 0; i<20;i++) {
      this.addressu.push(...this.street)
      let t: string =  this.result[i] + ' '+ this.lastname[i]

      this.fullname.push(t)
      let n: string =  '+82 '+ this.phone[i]
      this.phoneNumber.push(n)
      this.index_f.push(...this.index)
      this.identifier_f.push(...this.identifier)
    }

    this.data_korea = this.generateObj(this.phoneNumber,this.index_f, this.identifier_f,this.addressu,this.fullname)

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
