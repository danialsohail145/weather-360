import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KelvinCentiPipe } from './kelvin-centi.pipe';



@NgModule({
  declarations: [
    KelvinCentiPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    KelvinCentiPipe
  ]
})
export class PipeModule { }
