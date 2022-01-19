import { Component, OnInit } from '@angular/core';
import { Cat } from 'src/app/core/model/cat';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cats: Cat[] = [];
  headers: string[] = ['Id','Name', 'Temperament', 'Origin', 'Description', 'Adaptabilidade',
  'Affection level', 'Child friendly',' Energy level', 'Intelligence', 'Vocalisation', 'Rare'];

 constructor( ) { }

  ngOnInit(): void {
  }

}
