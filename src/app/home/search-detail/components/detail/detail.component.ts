import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { STATES } from 'src/app/constant/cities';
import { WeatherConfigService } from 'src/app/services/weather-config.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent  implements OnInit {

  states = STATES;
  public results = [...this.states];
  isSearchClicked: boolean = false;
  searchValue: string = '';
  searchWeatherData: any = '';
  weatherIcon: any = '';
  isLoading: boolean = false;
  constructor(private weatherService: WeatherConfigService,private route:ActivatedRoute) {
    this.route.params.subscribe((res:any)=>{
      this.searchValue = res.city
    })
  }

  ngOnInit() {
    this.isLoading = true;
    this.initData()
  }

 

  initData() {
    this.isLoading = true;
    this.isSearchClicked = false;
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeatherByCity(this.searchValue).subscribe({
      next: (res) => {
        this.searchWeatherData = res;
        this.weatherIcon = `https://openweathermap.org/img/w/${this.searchWeatherData.weather[0].icon}.png`;
      },
      complete:()=>{
        this.isLoading = false;
      }
    });
  }
 

}
