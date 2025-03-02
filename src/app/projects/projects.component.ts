import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Projects } from '../_models/Projects';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-projects',
  standalone: false,
  
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{
  projects = {} as Projects[];

  isCollapsed:boolean = true;
  typescript:boolean = false;
  angular:boolean = false;
  c:boolean = false;
  java:boolean = false;
  kotlin:boolean = false;
  firebase:boolean = false;
  python:boolean = false;
  html:boolean = false;
  css:boolean = false;

  filtering:boolean = false;

  constructor(private titleService : Title, private projectService : ProjectsService){
    this.titleService.setTitle('KrishnaChalla- Projects');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  filter(){
    let filterTags:Tag[]=[];
    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }
    if(this.angular){
      filterTags.push(Tag.ANGULAR);
    }
    if(this.c){
      filterTags.push(Tag.C);
    }
    if(this.python){
      filterTags.push(Tag.PYTHON);
    }
    if(this.java){
      filterTags.push(Tag.JAVA);
    }
    if(this.css){
      filterTags.push(Tag.CSS);
    }
    if(this.html){
      filterTags.push(Tag.HTML);
    }
    if(this.firebase){
      filterTags.push(Tag.FIREBASE);
    }
    if(this.kotlin){
      filterTags.push(Tag.KOTLIN);
    }

    if(this.typescript||
      this.angular ||
      this.c ||
      this.java||
      this.kotlin ||
      this.firebase ||
      this.python ||
      this.html ||
      this.css ){
        this.filtering = true;
      }else{
        this.filtering = false;
      }

    this.projects = this.projectService.GetProjectsByFilter(filterTags);

  }

  resetFilters(){
    this.typescript= false;
    this.angular = false;
    this.c = false;
    this.java= false;
    this.kotlin = false;
    this.firebase = false;
    this.python = false;
    this.html = false;
    this.css = false;
    this.filtering = false;
    
    
      this.projects  = this.projectService.GetProjects();
    
  }
}
