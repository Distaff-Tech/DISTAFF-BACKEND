import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsharednotificationComponent } from './postsharednotification.component';

describe('PostsharednotificationComponent', () => {
  let component: PostsharednotificationComponent;
  let fixture: ComponentFixture<PostsharednotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsharednotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsharednotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
