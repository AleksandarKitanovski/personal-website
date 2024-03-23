import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TechnologiesComponent implements OnInit {
  private p_langs = {
    labels: ['Python', 'JavaScript', 'Java', 
             'C/C++', 'Clojure', 'Prolog'],
    datasets: [{
      data: [9, 7, 5, 4, 3, 2],
      backgroundColor: [
        'rgba(55, 118, 170, 0.7)',
        'rgba(250, 215, 61, 0.7)',
        'rgba(243, 67, 54, 0.7)',
        'rgba(0, 87, 153, 0.7)',
        'rgba(95, 172, 49, 0.7)',
        'rgba(244, 137, 45, 0.7)'
      ],
      borderWidth: 1
    }]
  };

  private bi_tools = {
    labels: ['Tableau', 'PowerBI', 'Apache Superset'],
    datasets: [{
      data: [8, 5, 3],
      backgroundColor: [
        'rgba(31, 68, 126, 0.7)',
        'rgba(252, 199, 2, 0.7)',
        'rgba(3, 204, 191, 0.7)',
      ],
      borderWidth: 1
    }]
  };

  private dbs = {
    labels: ['Transact-SQL', 'PostgreSQL', 'MariaDB',
      'MongoDB', 'ChromaDB', 'Neo4j', 'Cassandra'],
    datasets: [{
      data: [9, 8, 8, 7, 6, 5, 2],
      backgroundColor: [
        'rgba(227, 31, 35, 0.7)',
        'rgba(49, 99, 141, 0.7)',
        'rgba(192, 118, 90, 0.7)',
        'rgba(77, 163, 74, 0.7)',
        'rgba(249, 217, 44, 0.7)',
        'rgba(1, 64, 125, 0.7)',
        'rgba(187, 230, 251, 0.7)'
      ],
      borderWidth: 1
    }]
  };

  private data_tools = {
    labels: ['Mage AI', 'Apache Airflow', 'Apache Spark', 'Apache Flink'],
    datasets: [{
      data: [6, 5, 4, 3],
      backgroundColor: [
        'rgba(162, 122, 254, 0.7)',
        'rgba(4, 214, 89, 0.7)',
        'rgba(255, 83, 25, 0.7)',
        'rgba(230, 82, 112, 0.7)'
      ],
      borderWidth: 1
    }]
  };

  private dev_tools = {
    labels: ['Git', 'Docker', 'Bash', 'Powershell', 'Kubernetes'],
    datasets: [{
      data: [7, 5, 4, 3, 2],
      backgroundColor: [
        'rgba(240, 81, 51, 0.7)',
        'rgba(0, 146, 230, 0.7)',
        'rgba(34, 221, 38, 0.7)',
        'rgba(1, 36, 86, 0.7)',
        'rgba(51, 110, 228, 0.7)'
      ],
      borderWidth: 1
    }]
  };

  private cloud = {
    labels: ['MS Azure', 'GCP', 'AWS'],
    datasets: [{
      data: [4, 2, 1],
      backgroundColor: [
        'rgba(58, 198, 242, 0.7)',
        'rgba(234, 67, 53, 0.7)',
        'rgba(255, 154, 0, 0.7)',
      ],
      borderWidth: 1
    }]
  };


  private createBar(id: string, data: any, label: string) {
    const canvas: HTMLCanvasElement = document.getElementById(id)!
      .appendChild(document.createElement('canvas'));

    canvas.style['margin'] = 'auto';
    canvas.style['width'] = '450px';
    canvas.style['height'] = '350px';

    new Chart(canvas, {
      type: 'bar',
      data: data,
      options: {
        indexAxis: 'y',
        plugins: {
          title: {
            display: true,
            text: label,
            color: 'orangered',
            font: {
              size: 17
            }
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            max: 10
          }
        }
      }
    });
  };

  ngOnInit(): void {
    this.createBar('langs', this.p_langs, 'Programming Languages');
    this.createBar('bi-tools', this.bi_tools, 'BI Tools');
    this.createBar('dbs', this.dbs, 'Databases');
    this.createBar('data-tools', this.data_tools, 'Data Engineering Tools');
    this.createBar('cloud', this.cloud, 'Cloud Providers');
    this.createBar('dev-tools', this.dev_tools, 'DevOps Tools');
  }
}
