import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPaginatorComponent } from './products-paginator.component';

describe('ProductsPaginatorComponent', () => {
  let component: ProductsPaginatorComponent;
  let fixture: ComponentFixture<ProductsPaginatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsPaginatorComponent]
    });
    fixture = TestBed.createComponent(ProductsPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
