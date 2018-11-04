import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopWatchByModelComponent } from './shop-watch-by-model.component';

describe('ShopWatchByModelComponent', () => {
  let component: ShopWatchByModelComponent;
  let fixture: ComponentFixture<ShopWatchByModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopWatchByModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopWatchByModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
