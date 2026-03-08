import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-restock',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './restock.component.html',
  styleUrl: './restock.component.css'
})
export class RestockComponent {
  // Data derived from AI forecasting
  suggestedItems = [
    { id: 'SKU-101', name: 'Mechanical Keyboard', currentStock: 5, minLevel: 20, vendor: 'TechLogistics Inc.' },
    { id: 'SKU-202', name: 'IoT Sensor Nodes', currentStock: 12, minLevel: 50, vendor: 'Global Electronics' }
  ];

  isModalOpen = false;
  selectedItem: any = null;
  poData = { quantity: 0, priority: 'Normal', notes: '' };

  openPOModal(item: any) {
    this.selectedItem = item;
    this.poData.quantity = item.minLevel - item.currentStock; // Auto-calculate needed amount
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  sendPO() {
    console.log('Purchase Order Sent:', { ...this.selectedItem, ...this.poData });
    alert(`PO generated and sent to ${this.selectedItem.vendor}!`);
    this.closeModal();
  }
}