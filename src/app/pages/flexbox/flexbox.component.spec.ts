import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexboxComponent } from './flexbox.component';

describe('FlexboxComponent', () => {
  let component: FlexboxComponent;
  let fixture: ComponentFixture<FlexboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
