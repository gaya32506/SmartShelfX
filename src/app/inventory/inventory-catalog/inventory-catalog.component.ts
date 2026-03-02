import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inventory-catalog',
  imports: [CommonModule],
  templateUrl: './inventory-catalog.component.html',
  styleUrl: './inventory-catalog.component.css'
})
export class InventoryCatalogComponent {
  showAddModal = false;

  toggleAddModal() {
    this.showAddModal = !this.showAddModal;
  }
}
