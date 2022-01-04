import { Component, OnInit } from '@angular/core';
import { chocolat } from 'src/app/chocolat.model';
import { ProdService } from 'src/app/prod.service';

@Component({
  selector: 'app-chocolat',
  templateUrl: './chocolat.component.html',
  styleUrls: ['./chocolat.component.css']
})
export class ChocolatComponent implements OnInit {
  chocolats = [
    new chocolat(
      "Ref1", "cote d'or", "chocolat blanc", "8%", "../assets/images/imgs/cote.jpg", 13000, true),
    new chocolat(
      "Ref2", "milka", "caramel", "12%", "../assets/images/imgs/milka.png", 3600, true),
    new chocolat(
      "Ref3", "lindt", "chocolat noir", " ", "../assets/images/imgs/lindt.png", 12900, true),
    new chocolat(
      "Ref4", "ferrero 16 piece", "chocolat au noisettes", " ", "../assets/images/imgs/ferero.jpg", 24500, true),];
   
    constructor(private p:ProdService) { }

  ngOnInit(): void {
    
  }
  onclick(arg:chocolat){
    this.p.tab.push(arg)
  }

}
