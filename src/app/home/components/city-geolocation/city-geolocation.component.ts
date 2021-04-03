import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { SearchCityService } from 'src/domain/services/search-city.service';
import { City } from 'src/domain/entities/city';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-geolocation',
  templateUrl: './city-geolocation.component.html',
  styleUrls: ['./city-geolocation.component.scss'],
})
export class CityGeolocationComponent implements OnInit {

  constructor(private geolocation: Geolocation,
    private readonly searchService: SearchCityService,
    private readonly router: Router) {}

  city: City;

  ngOnInit() {
  }

  async onClick(){
    
    this.geolocation.getCurrentPosition().then(async (resp) => {
      this.city = await this.searchService.haversineDistance(resp.coords.latitude,resp.coords.longitude);
      this.router.navigateByUrl(`/weather/${this.city.id}`);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
}
