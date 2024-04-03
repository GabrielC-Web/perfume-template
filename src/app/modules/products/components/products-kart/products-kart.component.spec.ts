import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsKartComponent } from './products-kart.component';

describe('ProductsKartComponent', () => {
  let component: ProductsKartComponent;
  let fixture: ComponentFixture<ProductsKartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsKartComponent]
    });
    fixture = TestBed.createComponent(ProductsKartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
