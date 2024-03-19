import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TechnologiesComponent implements OnInit{
  private p_langs = [
    {
      'name': 'Python',
      'skill': 10
    },
    {
      'name': 'JavaScript',
      'skill': 7
    },
    {
      'name': 'Java',
      'skill': 5
    },
    {
      'name': 'C/C++',
      'skill': 4
    },
    {
      'name': 'Clojure',
      'skill': 3
    },
    {
      'name': 'Prolog',
      'skill': 2
    }
  ];

  private bi_tools = [
    {
      'name': 'Tableau',
      'skill': 8
    },
    {
      'name': 'PowerBI',
      'skill': 5
    },
    {
      'name': 'Apache Superset',
      'skill': 3
    }
  ];

  private dbs = [
    {
      'name': 'Transact SQL',
      'skill': 9
    },
    {
      'name': 'PostgreSQL',
      'skill': 8
    },
    {
      'name': 'MariaDB',
      'skill': 8
    },
    {
      'name': 'MongoDB',
      'skill': 7
    },
    {
      'name': 'ChromaDB',
      'skill': 6
    },
    {
      'name': 'Neo4j',
      'skill': 5
    },
    {
      'name': 'Cassandra',
      'skill': 2
    }
  ];

  private data_tools = [
    {
      'name': 'Mage AI', 
      'skill': 6
    },
    {
      'name': 'Apache Airflow',
      'skill': 5
    },
    {
      'name': 'Apache Spark',
      'skill': 4
    },
    {
      'name': 'Apache Flink',
      'skill': 3
    }
  ];

  private dev_tools = [
    {
      'name': 'Git',
      'skill': 7
    },
    {
      'name': 'Docker',
      'skill': 5
    },
    {
      'name': 'Bash',
      'skill': 4
    },
    {
      'name': 'Powershell',
      'skill': 3
    },
    {
      'name': 'Kubernetes',
      'skill': 2
    }
  ];

  private cloud = [
    {
      'name': 'Microsoft Azure',
      'skill': 4
    },
    {
      'name': 'GCP',
      'skill': 2
    },
    {
      'name': 'AWS',
      'skill': 1
    }
  ]

  private createBar(id: string, 
                    data: {name: string, skill: number}[],
                    title: string) {
    const width = 500;
    const height = 350;

    const scale = width / 10;
    const bar_height = (height - 20) / (data.length * 1.5);
    const bar_distance = (height - 40) / data.length;
    const bar_padding_top = 50;
    const text_padding_top = 55 + bar_height / 2; // extra 5 because text is anchored at the bottom

    // Define the chart
    const bar = d3.select(`#${id}`)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('class', 'bar');

    // Add the bars
    bar.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', 0)
      .attr('y', (d, i) => i * bar_distance + bar_padding_top)
      .attr('width', d => d.skill * scale)
      .attr('height', bar_height)
      .attr('fill', '#50C878')
    
    // Add the labels
    bar.selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .attr('fill', 'black')
      .attr('x', 10)
      .attr('y', (d, i) => i * bar_distance + text_padding_top)
      .text(d => d.name)
      .style('font-weight', 'bolder');

    // Add the title
    bar.append('text')
       .text(title)
       .attr("transform", "translate(250, 30)")
       .attr('fill', '#B1DDF1')
       .attr('class', 'bar-title')
  }

  ngOnInit(): void {
    this.createBar('langs', this.p_langs, 'Programming Languages');
    this.createBar('bi-tools', this.bi_tools, 'BI Tools');
    this.createBar('dbs', this.dbs, 'Databases');
    this.createBar('data-tools', this.data_tools, 'Data Engineering Tools');
    this.createBar('cloud', this.cloud, 'Cloud Providers');
    this.createBar('dev-tools', this.dev_tools, 'DevOps Tools');
  }
}
