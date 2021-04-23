import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article, RESTNoticias} from '../noticias.interface'

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private apikey : string = '1e13234542f44a10a97504ecfe7ba8d2';
  private serviceUrl : string = 'https://newsapi.org/v2/top-headlines?country=us&category=business';

  public resultados : Article[] = [];

  async ObtenerNoticias(){
    
    let Low = await fetch (`${this.serviceUrl}&apiKey=${this.apikey}`)  
      let data: RESTNoticias = await Low.json()
    return data.articles;

  }

}
// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1e13234542f44a10a97504ecfe7ba8d2