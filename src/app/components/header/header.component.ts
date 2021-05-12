import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

  goTo(nom: string) {
    scroll(0,0);
    this.router.navigate(['/' + nom]);
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
