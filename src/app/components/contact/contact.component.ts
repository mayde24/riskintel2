import { Component, OnInit } from '@angular/core';
import {ContactService} from "../../services/contact.service";
import {SujetService} from "../../services/sujet.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {Contact} from "../../classes/Contact";
import {Sujet} from "../../classes/Sujet";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form!: FormGroup;


  constructor(public contactService: ContactService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.form = this.formBuilder.group({
      nom: ["", Validators.required],
      prenom: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      sujet: ["", Validators.required],
      message: ["", Validators.required],
    });

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

  onSubmit() {
    this.contactService.create(new Contact(this.contactService.getNewId(), this.form.value.nom, this.form.value.prenom, this.form.value.email, this.form.value.sujet, this.form.value.message));
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
