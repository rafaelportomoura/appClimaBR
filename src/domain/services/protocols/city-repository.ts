import {City} from "../../entities/city";
export abstract class CityRepository {
    abstract getAll(): Promise<City []>;
}