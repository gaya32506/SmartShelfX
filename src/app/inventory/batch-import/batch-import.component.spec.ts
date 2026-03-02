import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchImportComponent } from './batch-import.component';

describe('BatchImportComponent', () => {
  let component: BatchImportComponent;
  let fixture: ComponentFixture<BatchImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatchImportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
