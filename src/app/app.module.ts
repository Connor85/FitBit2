import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavitagtionBarComponent } from './navitagtion-bar/navitagtion-bar.component';
import { ShopComponent } from './shop/shop.component';
import { ShopWatchByModelComponent } from './shop-watch-by-model/shop-watch-by-model.component';
import { WhyFitbitComponent } from './why-fitbit/why-fitbit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavitagtionBarComponent,
    ShopComponent,
    ShopWatchByModelComponent,
    WhyFitbitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
