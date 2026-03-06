import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Transaction {
  timestamp: Date;
  itemName: string;
  type: 'Stock-In' | 'Stock-Out';
  quantity: number;
  handler: string;
}

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {
  inventory = [
    { id: 1, name: 'Smart Shelf Sensor V1', stock: 50 },
    { id: 2, name: 'RFID Controller', stock: 20 }
  ];

  transactions: Transaction[] = [];

  formData = {
    itemId: '',
    type: 'Stock-In',
    quantity: 0,
    handler: ''
  };

  onSubmit() {
    const selectedItem = this.inventory.find(i => i.id === +this.formData.itemId);

    if (!selectedItem || this.formData.quantity <= 0) {
      alert("Please select a valid item and quantity.");
      return;
    }

    if (this.formData.type === 'Stock-Out' && selectedItem.stock < this.formData.quantity) {
      alert("Error: Not enough stock available!");
      return;
    }

    const change = this.formData.type === 'Stock-In' ? this.formData.quantity : -this.formData.quantity;
    selectedItem.stock += change;

    this.transactions.unshift({
      timestamp: new Date(),
      itemName: selectedItem.name,
      type: this.formData.type as 'Stock-In' | 'Stock-Out',
      quantity: this.formData.quantity,
      handler: this.formData.handler
    });

    this.formData = { itemId: '', type: 'Stock-In', quantity: 0, handler: '' };
  }
}