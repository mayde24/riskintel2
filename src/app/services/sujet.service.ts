import { Injectable } from '@angular/core';
import {Sujet} from '../classes/Sujet';
import {Subject} from 'rxjs';
import firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class SujetService {

  sujets: Sujet[] = [];
  sujetSubject = new Subject<Sujet[]>();

  constructor() {
    this.getAll()
  }

  emit() {
    this.sujetSubject.next(this.sujets);
  }

  save() {
    firebase.database().ref('/sujets').set(this.sujets);
  }

  getAll() {
    firebase.database().ref('/sujets')
      .on('value', (data: DataSnapshot) => {
          this.sujets = data.val() ? data.val() : [];
          this.emit();
        }
      );
  }

  get(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/sujets/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  create(sujet: Sujet) {
    this.sujets.push(sujet);
    this.save();
    this.emit();
  }

  remove(sujet: Sujet) {
    const sujetIndexToRemove = this.sujets.findIndex((sujetElement) => sujetElement === sujet);
    this.sujets.splice(sujetIndexToRemove, 1);
    this.save();
    this.emit();
  }
}
