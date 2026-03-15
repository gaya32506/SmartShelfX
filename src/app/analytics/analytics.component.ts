import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})
export class AnalyticsComponent implements OnInit {
  @ViewChild('pieChart') pieChart!: ElementRef;
  @ViewChild('barChart') barChart!: ElementRef;
  @ViewChild('lineChart') lineChart!: ElementRef;

  ngOnInit() {
    setTimeout(() => {
      this.initPieChart();
      this.initBarChart();
      this.initLineChart();
    }, 100);
  }

  initPieChart() {
    new Chart(this.pieChart.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Electronics', 'Perishables', 'Accessories', 'Furniture'],
        datasets: [{
          data: [40, 20, 25, 15],
          backgroundColor: ['#667eea', '#764ba2', '#63b3ed', '#f6ad55']
        }]
      },
      options: { plugins: { legend: { position: 'bottom', labels: { color: '#fff' } } } }
    });
  }

  initBarChart() {
    new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [
          { label: 'Purchases', data: [65, 59, 80, 81], backgroundColor: '#667eea' },
          { label: 'Sales', data: [28, 48, 40, 19], backgroundColor: '#f56565' }
        ]
      },
      options: { scales: { y: { ticks: { color: '#fff' } }, x: { ticks: { color: '#fff' } } } }
    });
  }

  initLineChart() {
    new Chart(this.lineChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
          { label: 'Restock', data: [10, 25, 15, 40], borderColor: '#68d391', fill: false },
          { label: 'Demand', data: [15, 20, 30, 35], borderColor: '#fc8181', fill: false }
        ]
      }
    });
  }

  exportData(format: string) {
    alert(`Exporting Analytics as ${format}...`);
    // Future: Integration with libraries like jspdf or xlsx
  }
}