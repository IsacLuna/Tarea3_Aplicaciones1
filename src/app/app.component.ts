import { Component, OnInit } from '@angular/core';
import { Article } from './noticias.interface';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  ngOnInit(){
    this.NewsSearch();

  }

  show : boolean = true;

  public resultadosNoticias  : Article[] = [];

  constructor (private noticasServ : NoticiasService){

  }

  async NewsSearch (){
    this.resultadosNoticias = await this.noticasServ.ObtenerNoticias();
  }

}
