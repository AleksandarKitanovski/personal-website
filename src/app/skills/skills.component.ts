import { Component } from '@angular/core';
import Chart from 'chart.js/auto'

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  private overall = {
    labels: [
      'Data',
      'Math',
      'Software',
      'DevOps',
      'Soft Skills',
    ],
    datasets: [{
      data: [9, 8, 8, 4, 7],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
  };

  private data = {
    labels: [
      'Data Engineering',
      'Data Science',
      'Data Analysis',
      'Machine Learning',
      'MLOps',
      'Databases',
    ],
    datasets: [{
      data: [7, 8, 9, 8, 6, 6],
      fill: true,
      backgroundColor: 'rgba(132, 99, 255, 0.2)',
      borderColor: 'rgb(132, 99, 255)',
      pointBackgroundColor: 'rgb(132, 99, 255)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(132, 99, 255)'
    }]
  };

  private math = {
    labels: [
      'Statistics',
      'Probability Theory',
      'Calculus',
      'Optimization',
      'Linear Algebra',
    ],
    datasets: [{
      data: [7, 6, 8, 5, 5],
      fill: true,
      backgroundColor: 'rgba(61, 175, 247, 0.2)',
      borderColor: 'rgb(61, 175, 247)',
      pointBackgroundColor: 'rgb(61, 175, 247)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(61, 175, 247)'
    }]
  };

  private software = {
    labels: [
      'Back-end',
      'Front-end',
      'Design Patterns',
      'Algorithms',
      'Data Structures',
      'CS Theory',
    ],
    datasets: [{
      data: [7, 4, 2, 6, 7, 7],
      fill: true,
      backgroundColor: 'rgba(61, 247, 216, 0.2)',
      borderColor: 'rgb(61, 247, 216)',
      pointBackgroundColor: 'rgb(61, 247, 216)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(61, 247, 216)'
    }]
  };

  private devops = {
    labels: [
      'Linux',
      'Mac OS',
      'Windows Server',
      'Server Administration',
      'Bash Scripting',
      'Cloud Computing',
      'Networking'
    ],
    datasets: [{
      data: [6, 5, 3, 1, 4, 5, 2],
      fill: true,
      backgroundColor: 'rgba(61, 247, 123, 0.2)',
      borderColor: 'rgb(61, 247, 123)',
      pointBackgroundColor: 'rgb(61, 247, 123)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(61, 247, 123)'
    }]
  };

  private softSkills = {
    labels: [
      'Communication',
      'Team-work',
      'Public Speaking',
      'Time Management',
      'Responsibility',
    ],
    datasets: [{
      data: [8, 9, 7, 4, 9],
      fill: true,
      backgroundColor: 'rgba(224, 161, 44, 0.2)',
      borderColor: 'rgb(224, 161, 44)',
      pointBackgroundColor: 'rgb(224, 161, 44)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(224, 161, 44)'
    }]
  };

  createRadarChart(id: string, data: any, label: string) {
    const canvas: HTMLCanvasElement = document.getElementById(id)!
      .appendChild(document.createElement('canvas'));

    canvas.style['margin'] = 'auto';
    canvas.style['width'] = '350px';
    canvas.style['height'] = '350px';

    new Chart(canvas, {
      type: 'radar',
      data: data,
      options: {
        plugins: {
          title: {
            display: true,
            text: label,
            color: 'orangered',
            font: {
              size: 17,
            }
          },
          legend: {
            display: false
          },
        },
        scales: {
          r: {
            suggestedMax: 10,
            suggestedMin: 0,
          }
        },
        elements: {
          line: {
            borderWidth: 2
          }
        },
      },
    });

  }

  ngOnInit() {
    this.createRadarChart('overall', this.overall, 'Overall');
    this.createRadarChart('data', this.data, 'Data Science / Machine Learning');
    this.createRadarChart('math', this.math, 'Mathematics');
    this.createRadarChart('software', this.software, 'Software Engineering / Computer Science');
    this.createRadarChart('devops', this.devops, 'DevOps & SysAdmin');
    this.createRadarChart('soft-skills', this.softSkills, 'Soft Skills');
  }
}
