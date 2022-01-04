import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { AcheterComponent } from "./home/acheter/acheter.component";
import { ChocolatComponent } from "./home/chocolat/chocolat.component";
import { ContactComponent } from "./home/contact/contact.component";
import { HeaderComponent } from "./home/header/header.component";
import { HomeComponent } from "./home/home.component";


const routes: Routes=[
    {path: "", component:HomeComponent},
    {path: "chocolat", component:ChocolatComponent},
    {path: "acheter", component:AcheterComponent},
    {path: "contact", component:ContactComponent},
 
   
    
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}