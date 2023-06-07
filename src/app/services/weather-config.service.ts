import { Injectable } from '@angular/core';
import { HttpConfigService } from '../core/service/http-config.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherConfigService {
  apiKey = environment.APIKEY
  constructor(
    private config: HttpConfigService
  ) { }

  getCurrentWeather(lon:any,lat:any){
    return this.config.get(`/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`)
  }

  getWeatherByCity(cityname: string){
    return this.config.get(`/data/2.5/weather?q=${cityname}&appid=${this.apiKey}`)

  }
}
