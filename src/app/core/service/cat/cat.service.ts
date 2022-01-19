import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cat } from '../../model/cat';


@Injectable({
  providedIn: 'root'
})
export class CatService {
  private catUrl = `${environment.catUrl}/cats`;

  constructor(private http: HttpClient) { }

  allCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(`${this.catUrl}`);
  }
}
