import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CitiesApiService {
  basicURL = 'https://taskfrontendapi.azurewebsites.net/api/city';

  constructor(private http: HttpClient) { }

  addNewCity(CityObject : object) {
    console.log(CityObject);
    
    return this.http.post(`${this.basicURL}`,CityObject);

  }

  getAllCitiesByCountry(countryId : number) :any{
    return this.http.get(`${this.basicURL}/getcities/${countryId}`);
  }

  deleteCityByID(cityID : any) :any{
    return this.http.delete(`${this.basicURL}/${cityID}`);

  }
}
