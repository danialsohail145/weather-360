import { Component, OnInit } from '@angular/core';
import {
  Observable,
  OperatorFunction,
  debounceTime,
  distinctUntilChanged,
  map,
} from 'rxjs';
import { STATES } from 'src/app/constant/cities';
import { WeatherConfigService } from 'src/app/services/weather-config.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  states = STATES;
  public results = [...this.states];
  isSearchClicked: boolean = false;
  searchValue: string = '';
  searchWeatherData: any = '';
  weatherIcon: any = '';
  isLoading: boolean = false;
  constructor(private weatherService: WeatherConfigService) {}

  ngOnInit() {}

  getSearch() {}

  handleInput(event: any) {
    this.isSearchClicked = true;
    this.searchValue = event.target.value;
    const query = event.target.value.toLowerCase();
    this.results = this.states.filter(
      (d) => d.name.toLowerCase().indexOf(query) > -1
    );
  }

  setSearch(val: string) {
    this.isLoading = true;

    this.isSearchClicked = false;
    this.searchValue = val;
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeatherByCity(this.searchValue).subscribe({
      next: (res) => {
        this.searchWeatherData = res;
        this.weatherIcon = `https://openweathermap.org/img/w/${this.searchWeatherData.weather[0].icon}.png`;

        console.log(res);
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
  addToList() {
    let myList;
    let localList: string = localStorage.getItem('mylist') || '[]';
    myList = JSON.parse(localList);
    if (!myList.includes(this.searchWeatherData.name)) {
      myList.push(this.searchWeatherData.name);
      myList = JSON.stringify(myList);
      localStorage.setItem('mylist', myList);
    }
  }
}
