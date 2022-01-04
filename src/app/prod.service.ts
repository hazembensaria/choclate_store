import { Injectable } from '@angular/core';
import { chocolat } from './chocolat.model';

@Injectable({
  providedIn: 'root'
})
export class ProdService {

  constructor() { }
  tab:chocolat[]=[]
}
