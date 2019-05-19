import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'txt-api-app';
  private apiUrlLA = 'https://api.openweathermap.org/data/2.5/weather?id=5368361&units=imperial&APPID=81f2a77799a4dcd9e1cb5a3d510fdc69';
  private apiUrlHouston = 'https://api.openweathermap.org/data/2.5/weather?id=4699066&units=imperial&APPID=81f2a77799a4dcd9e1cb5a3d510fdc69'
  weatherData: object = {
              LA:{},
              HTX:{}
  };
  constructor(private http: HttpClient){}

  ngOnInit(){
    this.http.get(this.apiUrlLA)
      .subscribe((res)=>{
        this.weatherData['LA']= res;
      }, (err)=>{
        console.log(err);
      })

      this.http.get(this.apiUrlHouston)
      .subscribe((res)=>{
        this.weatherData['HTX'] = res;
      }, (err)=>{
        console.log(err);
      })

  }

  }

  