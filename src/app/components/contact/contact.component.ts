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

  sujets!: Array<Sujet>;
  sujetSubscription!: Subscription;
  largeur!: number;

  form!: FormGroup;


  constructor(public contactService: ContactService,
              public sujetService: SujetService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.largeur = window.innerWidth;
    this.sujets = [];
    this.sujetSubscription = this.sujetService.sujetSubject.subscribe(
      (sujets: Array<Sujet>) => {
        this.sujets = sujets;
      }
    );
    this.form = this.formBuilder.group({
      nom: ["", Validators.required],
      prenom: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      sujet: ["", Validators.required],
      message: ["", Validators.required],
    });
  }

  onSubmit() {
    this.contactService.create(new Contact(this.contactService.getNewId(), this.form.value.nom, this.form.value.prenom, this.form.value.email, this.form.value.sujet, this.form.value.message))
  }

}
