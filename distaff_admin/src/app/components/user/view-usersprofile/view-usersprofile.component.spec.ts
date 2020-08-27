import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUsersprofileComponent } from './view-usersprofile.component';

describe('ViewUsersprofileComponent', () => {
  let component: ViewUsersprofileComponent;
  let fixture: ComponentFixture<ViewUsersprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUsersprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUsersprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
