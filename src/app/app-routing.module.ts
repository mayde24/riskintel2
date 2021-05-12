import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {InterviewsComponent} from "./components/interviews/interviews.component";
import {TalkshowsComponent} from "./components/talkshows/talkshows.component";
import {ContactComponent} from "./components/contact/contact.component";
import {AboutusComponent} from "./components/aboutus/aboutus.component";
import {ExpertsComponent} from "./components/experts/experts.component";
import {VideoComponent} from "./components/video/video.component";
import {VideosComponent} from "./components/videos/videos.component";
import {ActualitesComponent} from "./components/actualites/actualites.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'interviews', component: InterviewsComponent },
  { path: 'talk-shows', component: TalkshowsComponent },
  { path: 'about-us', component: AboutusComponent },
  { path: 'experts', component: ExpertsComponent },
  { path: 'video', component: VideoComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'actualites', component: ActualitesComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
