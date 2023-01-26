import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../components/header/header.component";
import {FormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {MatSliderModule} from "@angular/material/slider";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MainComponent} from "../components/main/main.component";




@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatRadioModule,
    MatSliderModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,

  ],
  exports: [
    HeaderComponent,
    MainComponent,
  ]
})
export class CoreModule { }
