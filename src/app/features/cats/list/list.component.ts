import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cat } from 'src/app/core/model/cat';
import { CatService } from 'src/app/core/service/cat/cat.service';

@Component({
  selector: 'cat-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  cats: Cat[] = [];

  constructor(
    private catService: CatService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.catService.getCat().subscribe((value: Cat) => {
      this.cats.push(value);
    });
    this.activatedRoute.data.subscribe((value) => {
      this.cats = value.cats;
      console.log(value.cats);
    });
  }
}
