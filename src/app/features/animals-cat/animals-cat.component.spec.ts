import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsCatComponent } from './animals-cat.component';

describe('AnimalsCatComponent', () => {
  let component: AnimalsCatComponent;
  let fixture: ComponentFixture<AnimalsCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalsCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
