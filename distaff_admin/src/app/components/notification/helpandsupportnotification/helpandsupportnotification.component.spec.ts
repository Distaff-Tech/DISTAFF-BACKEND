import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpandsupportnotificationComponent } from './helpandsupportnotification.component';

describe('HelpandsupportnotificationComponent', () => {
  let component: HelpandsupportnotificationComponent;
  let fixture: ComponentFixture<HelpandsupportnotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpandsupportnotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpandsupportnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
