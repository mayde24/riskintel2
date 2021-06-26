import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {VideoService} from "../../services/video.service";
import {Video} from "../../classes/Video";
import {Subscription} from "rxjs";
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import {IntervenantService} from "../../services/intervenant.service";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  video: any;
  similaires: Array<any> = [];
  latest: Array<any> = [];
  intervenants: Array<any> = [];
  max1: number = 0;
  max2: number = 0;
  type: string = "";
  trustedDashboardUrl!: SafeUrl;
  // @ts-ignore
  videoSubscription: Subscription;

  constructor(public router: Router,
              public route: ActivatedRoute,
              public videoService: VideoService,
              public intervenantService: IntervenantService,
              private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.video = this.videoService.getOneById(this.route.snapshot.params['id']);
    });
    this.max1 = 0; this.max2 = 0;
    // Identifier le type de la vidéo
    this.type = (this.video.type == "Interview RISKINTEL") ? "interviews" : (this.video.type == "Table Ronde Des Experts") ? "experts" : "talk-shows";
    this.videoSubscription = this.videoService.videoSubject.subscribe(
      (similaires: Array<Video>) => {
        this.similaires = [];
        this.latest = [];
        for (let sim of similaires) {
          if(sim.type == this.video.type && this.max1 < 4) {
            this.similaires.push(sim);
            this.max1++;
          } else if (this.max2 < 8) {
            this.latest.push(sim);
            this.max2++;
          }
        }
      }
    );
    this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustHtml(this.video.code);
    this.videoService.getAll();
    // ==============================================================================
    // Intervenants =================================================================
    for (let elem of this.video.intervenants) {
      this.intervenants.push(this.intervenantService.getOneById(elem));
    }
    // ==============================================================================
    window.scrollTo(0,0);
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
