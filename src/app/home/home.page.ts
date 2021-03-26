import { SearchCityService } from './../../domain/services/search-city.service';
import { City } from './../../domain/entities/city';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cities: City[];
  hasError: boolean = false;
  errorMessage: string;
  constructor(private readonly searchCity: SearchCityService) {}

  async onSearch(query: string){
    this.hasError = false;
    try {
      this.cities = await this.searchCity.search(query);
    } catch(error){
      this.hasError = true;
      this.errorMessage = error.message;
    }
  }

}
