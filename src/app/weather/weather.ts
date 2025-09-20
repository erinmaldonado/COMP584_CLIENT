import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { WeatherData } from '../weather-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  imports: [],
  templateUrl: './weather.html',
  styleUrl: './weather.scss'
})
export class Weather {
  forecasts: WeatherData[] = [];
  constructor(http: HttpClient) {
    http.get<WeatherData[]>('https://localhost:5177/WeatherForecast').subscribe(result => {
      this.forecasts = result;
    });
  }
}