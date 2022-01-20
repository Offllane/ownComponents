import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsometricBoxComponent } from './isometric-box.component';

describe('IsometricBoxComponent', () => {
  let component: IsometricBoxComponent;
  let fixture: ComponentFixture<IsometricBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsometricBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsometricBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
