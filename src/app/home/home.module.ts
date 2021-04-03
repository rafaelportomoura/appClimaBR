import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CityGeolocationComponent } from './components/city-geolocation/city-geolocation.component';
import { CityDetailsComponent } from './components/city-details/city-details.component';
import { SharedModule } from '../shared/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule,
  ],
  declarations: [HomePage, CityDetailsComponent, CityGeolocationComponent],
})
export class HomePageModule {}
