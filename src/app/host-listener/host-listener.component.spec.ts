import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostListenerComponent } from './host-listener.component';

describe('HostListenerComponent', () => {
  let component: HostListenerComponent;
  let fixture: ComponentFixture<HostListenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostListenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
