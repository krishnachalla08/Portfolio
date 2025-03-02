import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { MovingbarComponent } from './movingbar/movingbar.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { MyjourneyComponent } from './myjourney/myjourney.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent,HeaderComponent, NavComponent, MovingbarComponent, HomeComponent, ProjectsComponent, MyjourneyComponent, ContactComponent,  ProjectCardComponent], // Declare components here
  imports: [BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    FormsModule
  ], // Import required Angular modules
  providers: [], // Provide services
  bootstrap: [AppComponent], // Specify the root component
})
export class AppModule {}
