import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegusuComponent } from './regusu.component';

describe('RegusuComponent', () => {
  let component: RegusuComponent;
  let fixture: ComponentFixture<RegusuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegusuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegusuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
