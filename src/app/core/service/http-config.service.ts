import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class HttpConfigService {
  baseURL  = environment.baseURL
  constructor(private http: HttpClient) { }

  get(url:string){
    return this.http.get(`${this.baseURL}${url}`)
  }
}
