import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  private llm = {
    labels: ['Python', 'LLMs', 'Llama.cpp',
             'FastAPI', 'Docker', 'MongoDB',
             'Pandas', 'ChromaDB', 'SQL',
             'Transformers', 'NLP', 'Git',
    ],
    datasets: [{
      data: [19, 16, 14, 13, 11, 8, 5, 4, 3, 3, 2, 2],
    }]
  };

  private chatbot = {
    labels: ['Rasa', 'Python', 'Tableau',
             'SQL', 'NLP', 'Pandas', 'Git',
    ],
    datasets: [{
      data: [30, 20, 15, 15, 10, 5, 5],
    }]
  };

  private timeSeries = {
    labels: ['Python', 'Scikit-learn', 'Pandas',
             'Seaborn', 'Statsmodel', 'Numpy', 'Git',
             'Docker'
    ],
    datasets: [{
      data: [25, 20, 15, 15, 10, 5, 5, 5],
    }]
  };

  private malware = {
    labels: ['XGBoost', 'Scikit-learn', 'Python',
             'Pandas', 'Seaborn', 'Numpy'
    ],
    datasets: [{
      data: [35, 25, 15, 10, 10, 5],
    }]
  };

  private fakeNews = {
    labels: ['Transformers', 'Python', 'Pandas',
             'NLP', 'Scikit-learn', 'Seaborn', 'Numpy'
    ],
    datasets: [{
      data: [35, 25, 15, 10, 5, 5, 5],
    }]
  };

  private log2graph = {
    labels: ['Python', 'NetworkX', 'Pandas'],
    datasets: [{
      data: [60, 30, 10],
    }]
  };

  createDoghnutChart(id: string, data: any) {
    const canvas: HTMLCanvasElement = document.getElementById(id)!
      .appendChild(document.createElement('canvas'));

    new Chart(canvas, {
      type: 'doughnut',
      data: data,
    });
  }

  ngOnInit() {
    this.createDoghnutChart('logs2graphs', this.log2graph);
    this.createDoghnutChart('fake-news', this.fakeNews);
    this.createDoghnutChart('malware', this.malware);
    this.createDoghnutChart('time-series', this.timeSeries);
    this.createDoghnutChart('chatbot', this.chatbot);
    this.createDoghnutChart('llm', this.llm);
  }
}
