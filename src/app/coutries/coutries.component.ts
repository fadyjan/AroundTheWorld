import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CountriesApiService } from '../Services/CountriesApi/countries-api.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-coutries',
  templateUrl: './coutries.component.html',
  styleUrls: ['./coutries.component.scss'],
})
export class CoutriesComponent implements OnInit {
  constructor(private fb: FormBuilder, private api: CountriesApiService  , private router: Router) {}
  Countries: any;
  newValue :any ;
  ngOnInit(): void {
   this.api.getAllCountries().subscribe((res: any) => {
    this.Countries = res;
    console.log(res);
  });

  }



  NewCounteryForm = this.fb.group({
    CounteryName: ['', Validators.required],
  });

  onSubmit() {
    this.api
      .AddNewCountry({ name: this.NewCounteryForm.value.CounteryName })
      .subscribe((res: any) => {
        this.Countries = [...this.Countries,res]
        console.log(res);
      });
  }

  DeleteCountry(id :any , index :any){
    console.log(id)
    this.api.DeleteCountry(id).subscribe((res : any)=>{
      this.Countries.splice(index, 1);
      console.log(res);
    })
  }

  CountryRedirect(CountryID : any){
    console.log(CountryID);
    this.router.navigateByUrl(`/country/${CountryID}`) 
  }


  EditCountry(CountryID : any , index : any){
      console.log(this.NewCounteryForm.value.CounteryName);
      this.api.UpdateCountry({"Id":CountryID,"Name":this.NewCounteryForm.value.CounteryName}).subscribe((res : any)=>{
        console.log(res);
        // this.Countries.splice(index, 1 , res);
                this.ngOnInit();

      })
  }
}



