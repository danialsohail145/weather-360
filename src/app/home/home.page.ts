import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonModal) modal: any = '';
  constructor(
    private router: Router
  ) {

  }

  btnClick(num: number){
    console.log(num)
  }
  addCity(){
    this.router.navigate(['home/search'])
  }
  navMain(){
    this.router.navigate(['home/main'])
  }

  get getMyList(){
    let myList = localStorage.getItem('mylist') || '[]';
    myList = JSON.parse(myList)
    return myList
  }

  navToWeather(city: string){
    this.cancel()
    this.router.navigate(['home/search',city])
  }
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
}
