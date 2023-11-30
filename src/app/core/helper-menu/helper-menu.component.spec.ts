import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperMenuComponent } from './helper-menu.component';

describe('HelperMenuComponent', () => {
  let component: HelperMenuComponent;
  let fixture: ComponentFixture<HelperMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelperMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelperMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
