import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostreportnotificationComponent } from './postreportnotification.component';

describe('PostreportnotificationComponent', () => {
  let component: PostreportnotificationComponent;
  let fixture: ComponentFixture<PostreportnotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostreportnotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostreportnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
