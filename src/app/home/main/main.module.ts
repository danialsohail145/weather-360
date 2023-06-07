import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ RouterModule, Routes} from '@angular/router'
import { MainComponent } from './components/main/main.component';
import { PipeModule } from 'src/app/core/pipe/pipe.module';
import { IonicModule } from '@ionic/angular';
const ROUTES : Routes= [
  {
    path:'',
    component: MainComponent
  }
]
@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    PipeModule,
    IonicModule,
    RouterModule.forChild(ROUTES)
    
  ]
})
export class MainModule { }
