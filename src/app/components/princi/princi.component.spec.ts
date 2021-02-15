import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinciComponent } from './princi.component';

describe('PrinciComponent', () => {
  let component: PrinciComponent;
  let fixture: ComponentFixture<PrinciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrinciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
