import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PopulationData } from './population-data';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-country-population',
  imports: [],
  templateUrl: './country-population.html',
  styleUrl: './country-population.scss'
})

export class CountryPopulation {
  Country!: PopulationData;
  constructor(http: HttpClient) {
    http.get<PopulationData>(environment.apiUrl + 'api/countries/population/26').subscribe(result => {
      this.Country = result;
    });
  }
}
