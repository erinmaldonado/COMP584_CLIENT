import { Component } from '@angular/core';
import { WeatherData } from '../weather-data';
import { CountryData } from './country-data';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-country',
  imports: [RouterLink],
  templateUrl: './country.html',
  styleUrl: './country.scss'
})

export class Country {
Countries: CountryData[] = [];
constructor(http: HttpClient) {
    http.get<CountryData[]>(environment.apiUrl + 'api/countries').subscribe(result => {
      this.Countries = result;
    });
  }
}
