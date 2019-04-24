import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArsyadFormRegisterComponent } from './arsyad-form-register.component';

describe('ArsyadFormRegisterComponent', () => {
  let component: ArsyadFormRegisterComponent;
  let fixture: ComponentFixture<ArsyadFormRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArsyadFormRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArsyadFormRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
