import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteAnimatorComponent } from './route-animator.component';

describe('RouteContainerComponent', () => {
  let component: RouteAnimatorComponent;
  let fixture: ComponentFixture<RouteAnimatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteAnimatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteAnimatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
