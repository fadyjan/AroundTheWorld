import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginBoxComponent } from './login-box/login-box.component';
import { CoutriesComponent } from './coutries/coutries.component';
import { CitiesComponent } from './cities/cities.component';
const routes: Routes = [
  { path: '', component: LoginBoxComponent },
  { path: 'AllCountries', component: CoutriesComponent },
  {path :'country/:id', component:CitiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
