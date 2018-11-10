import { ModuleWithProviders, Component } from "@angular/core";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { AppComponent } from "./app.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [{ path: "", component: AppComponent }];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
