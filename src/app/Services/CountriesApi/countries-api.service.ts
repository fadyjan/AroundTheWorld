import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesApiService {
  basicURL = 'https://taskfrontendapi.azurewebsites.net/api/country';
  constructor(private http: HttpClient) { }

  getAllCountries () : any{    
    return this.http.get(`${this.basicURL}`);

  }

  getCountryByID(countryId: number) : any{
    return this.http.get(`${this.basicURL}/${countryId}`);

  }

  AddNewCountry(CountryNameObj : object) : any{
    return this.http.post(`${this.basicURL}`,CountryNameObj);

  }

  UpdateCountry(countryObjectUpdated : object) : any{
    return this.http.put(`${this.basicURL}`,countryObjectUpdated );

  }


  DeleteCountry(countryId: number) : any{
    return this.http.delete(`${this.basicURL}/${countryId}`);

  }

}
