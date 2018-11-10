import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavitagtionBarComponent } from "./navitagtion-bar/navitagtion-bar.component";
import { ShopComponent } from "./shop/shop.component";
import { ShopWatchByModelComponent } from "./shop-watch-by-model/shop-watch-by-model.component";
import { WhyFitbitComponent } from "./why-fitbit/why-fitbit.component";
import { LoginComponent } from "./login/login.component";
import { AuthService } from "./auth.service";
import { SignupComponent } from "./signup/signup.component";
import { routing } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    NavitagtionBarComponent,
    ShopComponent,
    ShopWatchByModelComponent,
    WhyFitbitComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [BrowserModule, routing],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
