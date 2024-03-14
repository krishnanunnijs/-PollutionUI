import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter,map } from 'rxjs/operators';
import { PollutionData } from './PollutionData';

@Injectable({
  providedIn: 'root'
})
export class PollutionService {



  //private url = 'http://localhost:8095/pollution/viewPollutionData';
  private url: string = '/assets/data.json';
  data: PollutionData[] = [];

  constructor(private httpClient: HttpClient) { }
  
  viewPollutionData():Observable<any[]>{
  
    return this.httpClient.get<any[]>(this.url);
   }



}
