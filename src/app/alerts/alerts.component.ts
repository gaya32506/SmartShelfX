import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css'
})
export class AlertsComponent {
  // Mock data for Module 6 requirements
  alerts = [
    { id: 1, type: 'Low Stock', message: 'Mechanical Keyboard (SKU-101) is below 5 units.', severity: 'critical', date: new Date() },
    { id: 2, type: 'Expiry', message: 'Perishable Sensors (Batch-A9) expiring in 3 days.', severity: 'warning', date: new Date() },
    { id: 3, type: 'Vendor', message: 'Global Electronics confirmed PO #502.', severity: 'info', date: new Date() }
  ];

  dismissAlert(id: number) {
    this.alerts = this.alerts.filter(alert => alert.id !== id);
  }

  getSeverityClass(severity: string) {
    return {
      'text-danger': severity === 'critical',
      'text-warning': severity === 'warning',
      'text-info': severity === 'info'
    };
  }
}