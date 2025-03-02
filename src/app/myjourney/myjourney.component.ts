import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-myjourney',
  standalone: false,
  
  templateUrl: './myjourney.component.html',
  styleUrl: './myjourney.component.css'
})
export class MyjourneyComponent {
  
  journey = [
    { title: 'Higher Education', description: 'Completed class 10 in Sri sai maha vidyalaya English Medium High School,Nellore', x: 40, y: 700 },
    { title: 'Intermediate Education', description: 'Completed my class 12 in Narayana Junior College, Nellore', x: 120, y: 550 },
    { title: 'Graduation', description: 'Graduated from Jawaharlal Nehru Technological University Anantapur', x: 320, y: 400 },
    { title: 'Present - Associate Software Engineer', description: 'Currently working as Associate Software Engineer in Accenture', x: 420, y: 250 },
    { title: 'Future.....', description: 'Getting ready for upcoming life changes', x: 530, y: 100 },
  ];

  
  constructor(private titleService : Title){
    this.titleService.setTitle('KrishnaChalla- MyJourney');
  }
}
