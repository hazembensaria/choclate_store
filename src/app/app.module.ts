import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { ChocolatComponent } from './home/chocolat/chocolat.component';
import { AppRoutingModule } from './app-routing-module';
import { HomeComponent } from './home/home.component';
import { AcheterComponent } from './home/acheter/acheter.component';
import { ContactComponent } from './home/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChocolatComponent,
    HomeComponent,
    AcheterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
