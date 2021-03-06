import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleDirectiveComponent } from './sample-directive.component';

describe('SampleDirectiveComponent', () => {
  let component: SampleDirectiveComponent;
  let fixture: ComponentFixture<SampleDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
