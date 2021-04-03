import { City } from '../entities/city';
import { CityNotFoundError } from '../errors/city-not-found.error';
import { CityRepository } from './protocols/city-repository';
import haversine from 'src/domain/services/haversine-distance.service';

export class SearchCityService {
  constructor(private readonly cityRepo: CityRepository) {}

  async search(query: string): Promise<City[]> {
    if (!query || query.trim().length < 3) {
      return [];
    }

    const cities = await this.cityRepo.getAll();

    const filteredCities = cities.filter(
      (item) => item.name.toLowerCase().indexOf(query.toLowerCase()) > -1
    );

    if (filteredCities.length == 0) {
      throw new CityNotFoundError();
    }

    return filteredCities;
  }

  async haversineDistance(lat, long): Promise<City> {
    
    const cities = await this.cityRepo.getAll();

    let menor = 99999999999999;
    let _haversine;
    let _index = 0
    let index = 0;
    
    for await (let _city of cities) {
      _haversine = haversine({latitude: lat, longitude: long},{latitude: _city.coord.latitude, longitude: _city.coord.longitude});
      if (_haversine < menor){
        menor = _haversine;
        _index = index;
      }
      index++;
    }

    const city = cities[_index];

    return city;
  }

}
