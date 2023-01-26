import { Injectable } from '@angular/core';
import {avenueU, nameU, streetU} from "./utils-usa";

@Injectable({
  providedIn: 'root'
})
export class UsaService {
  public result: string[] = [];
  public index: number[] = []
  public identifier: number[] = []
  public house: number[] = []
  public phone: number[] = []
  public street: string[] = [];
  public avenue: string[] = [];
  public state: string[] = [];
  constructor() {
  }
public generateData() {

  let getRandomInt = (max: number) => Math.floor(Math.random() * Math.floor(max));

  while (this.result.length != 10) {
    let index = getRandomInt(nameU.length);
    this.result.push(nameU[index]);
    this.result = this.result.filter((v, i, arr) =>  arr.indexOf(v) == i);
  }
  while (this.index.length != 10) {
    let count = Math.floor(Math.random() * (99999 - 10000) ) + 10000;
    this.index.push(count);
    this.index = this.index.filter((v, i, arr) =>  arr.indexOf(v) == i);
  }
  while (this.identifier.length != 10) {
    let count = Math.floor(Math.random() * (999- 100) ) + 100;
    this.identifier.push(count);
    this.identifier = this.identifier.filter((v, i, arr) =>  arr.indexOf(v) == i);
  }
  while (this.house.length != 10) {
    let count = Math.floor(Math.random() * (300 - 1) ) + 1;
    this.house.push(count);
    this.house = this.house.filter((v, i, arr) =>  arr.indexOf(v) == i);
  }
  while (this.phone.length != 10) {
    let count = Math.floor(Math.random() * (9999999999- 2000000000) ) + 2000000000;
    this.phone.push(count);
    this.phone = this.phone.filter((v, i, arr) =>  arr.indexOf(v) == i);
  }
  while (this.street.length != 10) {
    let index = getRandomInt(streetU.length);
    this.street.push(streetU[index]);
    this.street = this.street.filter((v, i, arr) =>  arr.indexOf(v) == i);
  }
  while (this.avenue.length != 10) {
    let index = getRandomInt(avenueU.length);
    this.avenue.push(avenueU[index]);
    this.avenue = this.avenue.filter((v, i, arr) =>  arr.indexOf(v) == i);
  }

  while (this.state.length != 10) {
    let index = getRandomInt(streetU.length);
    this.state.push(streetU[index]);
    this.state = this.state.filter((v, i, arr) =>  arr.indexOf(v) == i);
  }

  console.log(this.result,this.index, this.identifier, this.street,this.house, this.phone,this.avenue,this.state )
}
}


