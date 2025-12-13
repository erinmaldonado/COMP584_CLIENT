import { Component } from '@angular/core';
import { CountryData } from './country-data';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import { environment } from '../../environments/environment.development';
import { RouterLink } from "@angular/router";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './country.html',
  styleUrl: './country.scss'
})

export class Country {
countries$: Observable<CountryData[]> = new Observable();
constructor(http: HttpClient) {
    this.countries$ = http.get<CountryData[]>(environment.apiUrl + 'api/countries');
  }
}
