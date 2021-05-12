import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
