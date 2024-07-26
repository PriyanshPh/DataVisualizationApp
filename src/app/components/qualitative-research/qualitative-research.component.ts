import { Component } from '@angular/core';

@Component({
  selector: 'app-qualitative-research',
  templateUrl: './qualitative-research.component.html',
  styleUrls: ['./qualitative-research.component.css']
})
export class QualitativeResearchComponent {
  researchData = [
    {
      title: 'Case Study 1',
      content: 'This is the summary of the first case study.',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      title: 'Case Study 2',
      content: 'This is the summary of the second case study.',
      imageUrl: 'https://via.placeholder.com/150'
    }
  ];
}
