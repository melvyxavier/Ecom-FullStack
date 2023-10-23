import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminproductMngComponent } from './adminproduct-mng.component';

describe('AdminproductMngComponent', () => {
  let component: AdminproductMngComponent;
  let fixture: ComponentFixture<AdminproductMngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminproductMngComponent]
    });
    fixture = TestBed.createComponent(AdminproductMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
