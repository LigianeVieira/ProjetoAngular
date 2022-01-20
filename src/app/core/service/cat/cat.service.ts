import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cat } from '../../model/cat';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  private _cat = new Subject<Cat>();
  private catUrl = `${environment.catUrl}`;

  constructor(private http: HttpClient) {}

  allCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(`${this.catUrl}`);
  }
  getCat(): Observable<Cat> {
    return this._cat.asObservable();
  }
}
