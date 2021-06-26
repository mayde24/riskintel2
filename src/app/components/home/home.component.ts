import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {VideoService} from "../../services/video.service";
import {IntervenantService} from "../../services/intervenant.service";
import {Video} from "../../classes/Video";
import {Intervenant} from "../../classes/Intervenant";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tables: Array<any> = [];
  talks: Array<any> = [];
  interviews: Array<any> = [];
  lastable: any;
  max1: number = 0;
  max2: number = 0;
  max3: number = 0;
  // @ts-ignore
  videoSubscription: Subscription;

  intervenants: Array<any> = [];
  // @ts-ignore
  intervenantSubscription: Subscription;

  constructor(public videoService: VideoService,
              public intervenantService: IntervenantService,
              public route: ActivatedRoute,
              public router: Router) { }

  ngOnInit(): void {
    // LISTE DES VIDEOS CHARGEES ICI ================================
    this.videoSubscription = this.videoService.videoSubject.subscribe(
      (videos: Array<Video>) => {
        this.tables = [];
        this.talks = [];
        this.interviews = [];
        for (let video of videos) {
          if (video.type == "Talk Show : CyberTalk" && this.max1 < 4) {
            this.talks.push(video);
            this.max1++;
          }
          if (video.type == "Table Ronde Des Experts" && this.max2 < 4) {
            if (this.max2 == 0) this.lastable = video;
            this.tables.push(video);
            this.max2++;
          }
          if (video.type == "Interview RISKINTEL" && this.max3 < 4) {
            this.interviews.push(video);
            this.max3++;
          }
        }
      }
    );
    this.videoService.getAll();
    // ==============================================================
    // Intervenants =================================================
    this.intervenantSubscription = this.intervenantService.intervenantSubject.subscribe(
      (intervenants: Array<Intervenant>) => {
        this.intervenants = [];
        for (let inter of intervenants) this.intervenants.push(inter);
      }
    )
    this.intervenantService.getAll();
    // ==============================================================
    const cursor = document.querySelector('.cursor')!;

    document.addEventListener('mousemove', e => {
      cursor.setAttribute("style", "top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px;")
    })

    document.addEventListener('click', () => {
      cursor.classList.add("cursor-expand");

      setTimeout(() => {
        cursor.classList.remove("cursor-expand");
      }, 500)
    })

    const cursor2 = document.querySelector('.cursor2')!;

    document.addEventListener('mousemove', e => {
      cursor2.setAttribute("style", "top: "+(e.pageY)+"px; left: "+(e.pageX)+"px;")
    })

    document.addEventListener('click', () => {
      cursor2.classList.add("cursor2-expand");

      setTimeout(() => {
        cursor2.classList.remove("cursor2-expand");
      }, 500)
    })
    cursor.classList.remove("cursor-hover");
    cursor2.classList.remove("cursor2-hover");
    window.scrollTo(0,0);
  }

  goTo(nom: string) {
    scroll(0,0);
    this.router.navigate(['/' + nom]);
  }

  goToVideo(id: number) {
    this.router.navigate(['/video', id]);
  }

  goToIntervenant(id: number) {
    this.router.navigate(['/intervenant', id]);
  }

  hoverOn() {
    const cursor = document.querySelector('.cursor')!;
    const cursor2 = document.querySelector('.cursor2')!;
    cursor.classList.add("cursor-hover");
    cursor2.classList.add("cursor2-expand");
  }

  hoverOff() {
    const cursor = document.querySelector('.cursor')!;
    const cursor2 = document.querySelector('.cursor2')!;
    cursor.classList.remove("cursor-hover");
    cursor2.classList.remove("cursor2-expand");
  }
}
