import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavitagtionBarComponent } from './navitagtion-bar.component';

describe('NavitagtionBarComponent', () => {
  let component: NavitagtionBarComponent;
  let fixture: ComponentFixture<NavitagtionBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavitagtionBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavitagtionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
