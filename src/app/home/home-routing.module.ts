import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'main',
        loadChildren:()=>import('./main/main.module').then(p=>p.MainModule)
      },
      {
        path:'search',
        loadChildren:()=>import('./search-detail/search-detail.module').then(p=>p.SearchDetailModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
