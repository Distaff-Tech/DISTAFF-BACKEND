import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisablpostsComponent } from './disablposts.component';

describe('DisablpostsComponent', () => {
  let component: DisablpostsComponent;
  let fixture: ComponentFixture<DisablpostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisablpostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisablpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
