import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColorMindService {

  constructor(private http: HttpClient) {}

  getColors(model: any, input: any, lock: any) {
    const url = 'http://colormind.io/api/';
    let data;
    if (lock) {
      data = {
        model: 'default',
        input
      };
    } else {
      data = {
        model: 'default'
      };
    }
    
    return this.http.post(url, JSON.stringify(data));
  }
}