import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from 'src/app/core/model/animal';
import { AnimalService } from 'src/app/core/service/animal/animal.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  formAnimal: FormGroup;
  formTypeLabel: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private animalService: AnimalService
  ) {}

  ngOnInit(): void {
    this.formAnimal = this.formBuilder.group({
      id: '',
      identification: '',
      specie: '',
    });
    const hasId = Boolean(this.activatedRoute.snapshot.params.id);
    this.formTypeLabel = hasId ? 'Atualizar' : 'Cadastrar';
  }

  submit(event: Animal): void {
    this.animalService.upsert(event).subscribe(() => {
      this.router.navigate(['..'], { relativeTo: this.activatedRoute });
    });
  }
}
