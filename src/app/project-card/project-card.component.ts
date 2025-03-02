import { Component, Input } from '@angular/core';
import { Projects } from '../_models/Projects';

@Component({
  selector: 'app-project-card',
  standalone: false,
  
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project = {} as Projects;
}




