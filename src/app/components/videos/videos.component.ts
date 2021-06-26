import { Component, OnInit } from '@angular/core';
import {Video} from '../../classes/Video';
import {Observable, Subscription} from 'rxjs';
import {VideoService} from '../../services/video.service';
import {map} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  videos: Array<any> = [];
  // @ts-ignore
  videoSubscription: Subscription;

  constructor(public videoService: VideoService,
              public router: Router) { }

  ngOnInit(): void {
    // LISTE DES VIDEOS CHARGEES ICI ================================
    this.videos = [];
    this.videoSubscription = this.videoService.videoSubject.subscribe(
      (videos: Array<Video>) => {
        this.videos = [];
        for (let video of videos) {
          this.videos.push(video);
        }
      }
    );
    this.videoService.getAll();
    // ==============================================================
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
    this.router.navigate(['/video', id])
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
