import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {InterviewsComponent} from "./components/interviews/interviews.component";
import {TalkshowsComponent} from "./components/talkshows/talkshows.component";
import {ContactComponent} from "./components/contact/contact.component";
import {AboutusComponent} from "./aboutus/aboutus.component";
import {ExpertsComponent} from "./components/experts/experts.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'interviews', component: InterviewsComponent },
  { path: 'talk-shows', component: TalkshowsComponent },
  { path: 'about-us', component: AboutusComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'experts', component: ExpertsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
