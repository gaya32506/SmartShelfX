import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryCatalogComponent } from './inventory-catalog.component';

describe('InventoryCatalogComponent', () => {
  let component: InventoryCatalogComponent;
  let fixture: ComponentFixture<InventoryCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryCatalogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
