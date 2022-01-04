import { Component, OnInit } from '@angular/core';
import { chocolat } from 'src/app/chocolat.model';
import { ProdService } from 'src/app/prod.service';

@Component({
  selector: 'app-acheter',
  templateUrl: './acheter.component.html',
  styleUrls: ['./acheter.component.css']
})
export class AcheterComponent implements OnInit {
tab:chocolat[]=[]
  constructor(private p: ProdService) { }

  ngOnInit(): void {
    this.tab=this.p.tab
  }

}
