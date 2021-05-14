import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InterviewsComponent } from './components/interviews/interviews.component';
import { ExpertsComponent } from './components/experts/experts.component';
import { TalkshowsComponent } from './components/talkshows/talkshows.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatOptionModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatSelectModule} from "@angular/material/select";
import {AngularFireModule} from "@angular/fire";
import { VideoComponent } from './components/video/video.component';
import { VideosComponent } from './components/videos/videos.component';
import { ActualitesComponent } from './components/actualites/actualites.component';
import { IntervenantComponent } from './components/intervenant/intervenant.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InterviewsComponent,
    ExpertsComponent,
    TalkshowsComponent,
    ContactComponent,
    AboutusComponent,
    HeaderComponent,
    FooterComponent,
    VideoComponent,
    VideosComponent,
    ActualitesComponent,
    IntervenantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatOptionModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    AngularFireModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
