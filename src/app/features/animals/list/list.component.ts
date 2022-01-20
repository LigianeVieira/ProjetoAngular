import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/core/model/animal';
import { AnimalService } from 'src/app/core/service/animal/animal.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  animals: Animal[] = [];
  headers: string[] = ['Id', 'Name', 'Description', 'Actions'];

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {}

  deleteAnimal(event): void {
    this.animalService.delete(event.id).subscribe(() => {
      this.animalService.all().subscribe(event.callback);
    });
  }

  searchAnimal(event) {
    this.animalService.all({ query: event.query }).subscribe(event.callback);
  }

  
}
