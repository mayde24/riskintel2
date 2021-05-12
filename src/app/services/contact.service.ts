import { Injectable } from '@angular/core';
import {Contact} from '../classes/Contact';
import {Subject} from 'rxjs';
import firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import "../../assets/smtp"

declare let Email: any;

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[] = [];
  contactSubject = new Subject<Contact[]>();

  constructor() {
    this.getAll()
  }

  emit() {
    this.contactSubject.next(this.contacts);
  }

  save() {
    firebase.database().ref('/contacts').set(this.contacts);
  }

  getAll() {
    firebase.database().ref('/contacts')
      .on('value', (data: DataSnapshot) => {
          this.contacts = data.val() ? data.val() : [];
          this.emit();
        }
      );
  }

  get(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/contacts/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  create(contact: Contact) {
    this.contacts.push(contact);
    this.save();
    this.emit();
    this.sendEmail(contact);
  }

  remove(contact: Contact) {
    const contactIndexToRemove = this.contacts.findIndex(
      (contactElement) => {
        if(contactElement === contact) {
          return true;
        }
      }
    );
    this.contacts.splice(contactIndexToRemove, 1);
    this.save();
    this.emit();
  }

  getNewId(): number {
    let maxId = -1;
    for (let contact of this.contacts)
      if (contact._id > maxId) maxId = contact._id;
    return maxId + 1;
  }

  sendEmail(contact : Contact) {
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "yasmine.douadi@riskintel.fr",
      Password : "910AE9183D4F761EA32F88C2BD82BE5DABD3",
      To : "yasmine.douadi@riskintel.fr",
      From : "yasmine.douadi@riskintel.fr",
      Subject : "Nouveau message de " + contact._prenom + " " + contact._nom,
      Body :
        "<br/><b>" + contact._prenom + " " + contact._nom + " a rempli le formulaire de contact</b><br/><br/>" +
        "<b>Email: </b>" + contact._email + "<br/>" +
        "<b>Sujet: </b>" + contact._sujet + "<br/><br/>" +
        "<b>Message:</b><br/>" +
        contact._message + "<br><br>"
    }).then();
  }

}
