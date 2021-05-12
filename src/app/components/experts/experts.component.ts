import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.scss']
})
export class ExpertsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
  }

}
