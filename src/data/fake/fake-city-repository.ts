import { City } from './../../domain/entities/city';
import { CityRepository } from "src/domain/services/protocols/city-repository";


export class FakeCityRepository extends CityRepository{
    
    cities: City[]= [
        {
            id: 1,
            name: 'Lavras',
            state: 'MG',
            coord: {
                latitude: 1,
                longitude: 1
            }
        },
        {
            id: 2,
            name: 'Divinópolis',
            state: 'MG',
            coord: {
                latitude: 1,
                longitude: 1
            }
        },
        {
            id: 3,
            name: 'Ipatinga',
            state: 'MG',
            coord: {
                latitude: 1,
                longitude: 1
            }
        },
    ]

    async getAll(): Promise<City []> {
        return this.cities;
    }
}