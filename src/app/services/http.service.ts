import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Audio } from '../model/audio';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private readonly http: HttpClient) {}

  public getList(): Observable<Audio[]> {
    return this.http
      .get('assets/data.json')
      .pipe(map((data: any) => data['playList']));
  }
}
