import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IntervenantService} from "../../services/intervenant.service";
import {VideoService} from "../../services/video.service";
import {Video} from "../../classes/Video";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-intervenant',
  templateUrl: './intervenant.component.html',
  styleUrls: ['./intervenant.component.scss']
})
export class IntervenantComponent implements OnInit {

  intervenant: any;
  videos: Array<any> = [];
  // @ts-ignore
  videoSubscription: Subscription;

  constructor(public router: Router,
              public route: ActivatedRoute,
              public intervenantService: IntervenantService,
              public videoService: VideoService) { }

  ngOnInit(): void {
    // ====================================================
    this.intervenant = this.intervenantService.getOneById(this.route.snapshot.params['id']);
    // VIDEOS =============================================
    this.videos = [];
    this.videoSubscription = this.videoService.videoSubject.subscribe(
      (videos: Array<Video>) => {
        this.videos = [];
        for (let video of videos) {
          for (let elem of video.intervenants) {
            if (elem == this.intervenant.id) this.videos.push(video);
          }
        }
      }
    );
    this.videoService.getAll();
    // ====================================================
    const cursor = document.querySelector('.cursor')!;

    document.addEventListener('mousemove', e => {
      cursor.setAttribute("style", "top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px;");
    });

    document.addEventListener('click', () => {
      cursor.classList.add("cursor-expand");

      setTimeout(() => {
        cursor.classList.remove("cursor-expand");
      }, 500);
    });

    const cursor2 = document.querySelector('.cursor2')!;

    document.addEventListener('mousemove', e => {
      cursor2.setAttribute("style", "top: "+(e.pageY)+"px; left: "+(e.pageX)+"px;");
    });

    document.addEventListener('click', () => {
      cursor2.classList.add("cursor2-expand");

      setTimeout(() => {
        cursor2.classList.remove("cursor2-expand");
      }, 500);
    });
    cursor.classList.remove("cursor-hover");
    cursor2.classList.remove("cursor2-hover");
  }

  goToVideo(id: number) {
    this.router.navigate(['/video', id]);
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
