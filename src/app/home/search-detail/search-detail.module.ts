import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SearchDetailRoutingModule } from './search-detail-routing.module';
import { SearchComponent } from './components/search/search.component';
import { NgbTypeaheadModule }from '@ng-bootstrap/ng-bootstrap'
import { FormsModule }from '@angular/forms'
import { PipeModule } from 'src/app/core/pipe/pipe.module';
import { DetailComponent } from './components/detail/detail.component';


@NgModule({
  declarations: [
    SearchComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    NgbTypeaheadModule,
    FormsModule,
    PipeModule,
    SearchDetailRoutingModule
  ]
})
export class SearchDetailModule { }
