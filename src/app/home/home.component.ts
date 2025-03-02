import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Projects } from '../_models/Projects';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  featureproject = {} as Projects;
  constructor(private titleService : Title,private projectService:ProjectsService){
    this.titleService.setTitle('KrishnaChalla- Home');
  }
  ngOnInit(): void {
    this.featureproject = this.projectService.GetProjectById(0);
  }
}
