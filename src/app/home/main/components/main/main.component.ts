import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { WeatherConfigService } from 'src/app/services/weather-config.service';
const PASS_SPN_TXT = [ { name: 'PASS V \xB0C' },
    { name: 'PASS. T12 \xB0C' }];

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent  implements OnInit {
  mylocation : any= '';
  weatherInfo: any = '';
  degree = PASS_SPN_TXT
  isloading: boolean = true;
  weatherIcon: any = ''
  constructor(
    private weatherService :WeatherConfigService
  ) { }

  ngOnInit() {
    this.isloading = true;
    this.getCordinates().then((res)=>{
      this.mylocation = res.coords
      this.getWeather();
    })
  }

  async getCordinates() {
    const coordinates = await Geolocation.getCurrentPosition();
  
    return coordinates
  };

  getWeather(){
    this.weatherService.getCurrentWeather(this.mylocation.longitude, this.mylocation.latitude).subscribe({
      next:(res)=>{
        this.weatherInfo = res;
    this.weatherIcon =  `https://openweathermap.org/img/w/${this.weatherInfo.weather[0].icon}.png`

        console.log(this.weatherInfo);

      },
      complete:()=>{
        this.isloading = false;
      }
    })
  }



}
