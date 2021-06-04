import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HideHomeComponent } from './hide-home.component';

describe('HideHomeComponent', () => {
  let component: HideHomeComponent;
  let fixture: ComponentFixture<HideHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HideHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HideHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
