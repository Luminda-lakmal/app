import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllenrollmentsComponent } from './allenrollments.component';

describe('AllenrollmentsComponent', () => {
  let component: AllenrollmentsComponent;
  let fixture: ComponentFixture<AllenrollmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllenrollmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllenrollmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
