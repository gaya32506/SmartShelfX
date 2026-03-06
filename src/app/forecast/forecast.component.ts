import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.css'
})
export class ForecastComponent implements OnInit {
  @ViewChild('forecastChart') forecastChart!: ElementRef;

  // Mock data representing AI Microservice Output
  predictionData = [
    { sku: 'KBD-001', name: 'Mechanical Keyboard', currentStock: 5, forecast: 45, risk: true },
    { sku: 'MOU-042', name: 'Wireless Mouse', currentStock: 12, forecast: 15, risk: false },
    { sku: 'MON-105', name: '27" 4K Monitor', currentStock: 18, forecast: 60, risk: true }
  ];

  ngOnInit() {
    // Delay to ensure the canvas element is ready
    setTimeout(() => this.createChart(), 100);
  }

  createChart() {
    new Chart(this.forecastChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Predicted Demand',
          data: [30, 45, 35, 70, 55, 90, 110],
          borderColor: '#667eea',
          backgroundColor: 'rgba(102, 126, 234, 0.1)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { labels: { color: '#fff' } } },
        scales: {
          y: { ticks: { color: '#a0aec0' }, grid: { color: 'rgba(255,255,255,0.05)' } },
          x: { ticks: { color: '#a0aec0' }, grid: { display: false } }
        }
      }
    });
  }
}