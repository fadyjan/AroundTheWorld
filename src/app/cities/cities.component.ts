import { Component, OnInit ,Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CountriesApiService } from '../Services/CountriesApi/countries-api.service';
import { CitiesApiService } from '../Services/CitiesApi/cities-api.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  constructor(private fb: FormBuilder, private api: CitiesApiService  ,private router: ActivatedRoute) { }
  Cities :any ;
  countryid :any
  ngOnInit(): void {
    this.countryid = this.router.snapshot.paramMap.get('id')    
   this.Cities =  this.api.getAllCitiesByCountry(Number(this.countryid)).subscribe((res :any)=>{
      this.Cities = res;

   });
   

  }
  NewCityForm = this.fb.group({
    CityName: ['', Validators.required],
  });

  onSubmit() {
    this.api.addNewCity({ "Name": this.NewCityForm.value.CityName , "CountryId":Number(this.countryid )  }).subscribe((res: any) => {
      this.Cities = [...this.Cities,res]
      console.log(this.Cities);
      });
  }

  DeleteCity(cityid :Number , index :Number){
    this.api.deleteCityByID(cityid).subscribe((res :any) => {
      this.Cities.splice(index, 1);
      console.log(res);
    })
  }

}
