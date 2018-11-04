import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyFitbitComponent } from './why-fitbit.component';

describe('WhyFitbitComponent', () => {
  let component: WhyFitbitComponent;
  let fixture: ComponentFixture<WhyFitbitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyFitbitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyFitbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
