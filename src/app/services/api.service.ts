import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { 
    console.log('servicio http:');
  }

  getCards(cardName: string): any{
    return this.http.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?name='+ cardName);
  }
  
  getBanlist(format: string):any{
    //return this.http.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=ocg&banlist=tcg&sort=type');
    return this.http.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist='+format+'&sort=type');
  }

}
