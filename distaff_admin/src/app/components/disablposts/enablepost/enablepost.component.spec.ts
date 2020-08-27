import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnablepostComponent } from './enablepost.component';

describe('EnablepostComponent', () => {
  let component: EnablepostComponent;
  let fixture: ComponentFixture<EnablepostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnablepostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnablepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
