import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttemptVerbalComponent } from './attempt-verbal.component';

describe('AttemptVerbalComponent', () => {
  let component: AttemptVerbalComponent;
  let fixture: ComponentFixture<AttemptVerbalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttemptVerbalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttemptVerbalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
