import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDashbordComponent } from './main-dashbord.component';

describe('MainDashbordComponent', () => {
  let component: MainDashbordComponent;
  let fixture: ComponentFixture<MainDashbordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDashbordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
