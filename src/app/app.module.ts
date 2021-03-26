import { FakeCityRepository } from './../data/fake/fake-city-repository';
import { SearchCityService } from './../domain/services/search-city.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

const createSearchCityService = () => new SearchCityService(new FakeCityRepository())


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: SearchCityService, useFactory: createSearchCityService}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
