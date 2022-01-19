import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'shared-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input()
  headers: string[];

  // entities: any[];
  // keys: string[];
  // inputValue: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
//     this.activatedRoute.data.subscribe((value) => {
//       this.entities = value.entities;
//     });

//     this.keys = Object.keys(this.entities[0]);
 }
}
