import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamDetailStudentComponent } from './exam-detail-student.component';

describe('ExamDetailStudentComponent', () => {
  let component: ExamDetailStudentComponent;
  let fixture: ComponentFixture<ExamDetailStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamDetailStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamDetailStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
