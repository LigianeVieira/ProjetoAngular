import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cats } from '../../model/cats';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private catUrl = `${environment.catUrl}/cats`;

  constructor(private http: HttpClient) { }

  allCats(): Observable<Cats> {
    return this.http.get<Cats[]>(`${this.catUrl}/${}`);
  }
}
