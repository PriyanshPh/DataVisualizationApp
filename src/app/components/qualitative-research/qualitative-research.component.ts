import { Component, OnInit } from '@angular/core';

interface CaseStudy {
  title: string;
  image: string;
  description: string;
  quote: string;
  quoteAuthor: string;
}

@Component({
  selector: 'app-qualitative-research',
  templateUrl: './qualitative-research.component.html',
  styleUrls: ['./qualitative-research.component.css']
})
export class QualitativeResearchComponent implements OnInit {
  caseStudies: CaseStudy[] = [
    {
      title: 'Case Study 1: Impact of Remote Work',
      image: 'https://via.placeholder.com/600x400',
      description: 'Remote work has significantly impacted the productivity and well-being of employees. According to our research, 70% of respondents reported higher productivity levels when working from home.',
      quote: 'Working from home has allowed me to balance my personal and professional life better. I feel more productive and less stressed.',
      quoteAuthor: 'John Doe'
    },
    {
      title: 'Case Study 2: Adoption of Digital Tools',
      image: 'https://via.placeholder.com/600x400',
      description: 'The adoption of digital tools has accelerated during the pandemic. Our research shows that 80% of companies have implemented new digital tools to facilitate remote work.',
      quote: 'Digital tools have revolutionized the way we work. Communication and collaboration have become much more efficient.',
      quoteAuthor: 'Jane Smith'
    }
  ];

  summary: string[] = [
    '70% of respondents report higher productivity levels when working from home.',
    '80% of companies have implemented new digital tools to facilitate remote work.',
    'Employees feel more productive and less stressed working from home.',
    'Digital tools have improved communication and collaboration.'
  ];

  constructor() {}

  ngOnInit(): void {}
}
