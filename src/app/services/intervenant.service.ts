import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Intervenant} from '../classes/Intervenant';

@Injectable({
  providedIn: 'root'
})
export class IntervenantService {

  ref: string = "intervenants";
  intervenants: Array<any> = [];
  intervenantSubject = new Subject<Array<Intervenant>>();

  constructor() { }

  emit() {
    this.intervenantSubject.next(this.intervenants);
  }

  getAll() {
    this.intervenants = [ {
      "description" : "ANSSI, Chef de la division Management de la sécurité numérique",
      "id" : 0,
      "lien" : "https://www.linkedin.com/in/vincent-desroches-31269b1b/",
      "nom" : "Desroches",
      "prenom" : "Vincent",
      "titre" : "Chef de la division Management de la sécurité numérique",
      "photo" : "assets/img/intervenant2.png",
      "template" : "assets/img/homme.png"
    }, {
      "description" : "Officier de Sécurité des Systèmes d’Information (OSSI)",
      "id" : 1,
      "lien" : "https://www.linkedin.com/in/b%C3%A9atrice-b%C3%A9rard-a30808117/",
      "nom" : "Bérard",
      "prenom" : "Béatrice",
      "titre" : "Officier de Sécurité des Systèmes d’Information (OSSI)",
      "photo" : "assets/img/intervenant2.png",
      "template" : "assets/img/homme.png"
    }, {
      "description" : "directeur marketing chez Advens et ancien RSSI",
      "id" : 2,
      "lien" : "https://www.linkedin.com/in/benjamin-leroux-1688a4/",
      "nom" : "Leroux",
      "prenom" : "Benjamin",
      "titre" : "directeur marketing chez Advens et ancien RSSI",
      "photo" : "assets/img/intervenant2.png",
      "template" : "assets/img/homme.png"
    }, {
      "description" : "RSSI de Doctolib",
      "id" : 3,
      "lien" : "https://www.linkedin.com/in/cedric-voisin-6093423/",
      "nom" : "Voisin",
      "prenom" : "Cédric",
      "titre" : "RSSI de Doctolib",
      "photo" : "assets/img/intervenant2.png",
      "template" : "assets/img/homme.png"
    }, {
      "description" : "Ambassadeur Pôle d'Excellence Cyber",
      "id" : 4,
      "lien" : "https://www.linkedin.com/in/arnaudctr/",
      "nom" : "Coustillere",
      "prenom" : "Arnaud",
      "titre" : "Ambassadeur Pôle d'Excellence Cyber",
      "photo" : "assets/img/intervenant2.png",
      "template" : "assets/img/homme.png"
    }, {
      "description" : "Membre du  Pôle d'Excellence Cyber",
      "id" : 5,
      "lien" : "https://www.linkedin.com/in/charlotte-wojcik-28518353/",
      "nom" : "Wojcik",
      "prenom" : "Charlotte",
      "titre" : "Membre du  Pôle d'Excellence Cyber",
      "photo" : "assets/img/intervenant2.png",
      "template" : "assets/img/homme.png"
    }, {
      "description" : "Avocat associé LABRUYERE&Co",
      "id" : 6,
      "lien" : "https://www.linkedin.com/in/oriana-labruy%C3%A8re-law/",
      "nom" : "Labruyère",
      "prenom" : "Oriana",
      "titre" : "Avocat associé LABRUYERE&Co",
      "photo" : "assets/img/intervenant2.png",
      "template" : "assets/img/homme.png"
    }, {
      "description" : "Fondateur & CEO OXIBOX",
      "id" : 7,
      "lien" : "https://www.linkedin.com/in/francoisfeugeas/",
      "nom" : "Esnol-Feugeas",
      "prenom" : "François",
      "titre" : "Fondateur & CEO OXIBOX",
      "photo" : "assets/img/intervenant2.png",
      "template" : "assets/img/homme.png"
    }, {
      "description" : "Co-fondateur OLVID",
      "id" : 8,
      "lien" : "https://www.linkedin.com/in/c%C3%A9dric-sylvestre-ba5a0012/",
      "nom" : "Sylvestre",
      "prenom" : "Cédric",
      "titre" : "Co-fondateur OLVID",
      "photo" : "assets/img/intervenant2.png",
      "template" : "assets/img/homme.png"
    }, {
      "description" : "Expert Cybersécurité membre du CESIN",
      "id" : 9,
      "lien" : "https://www.linkedin.com/in/micheljuvin/",
      "nom" : "Juvin",
      "prenom" : "Michel",
      "titre" : "Expert Cybersécurité membre du CESIN",
      "photo" : "assets/img/intervenant2.png",
      "template" : "assets/img/homme.png"
    }, {
      "description" : "Cofondateur de la société BreacHunt et cofondateur de la communauté OSINT-FR",
      "id" : 10,
      "lien" : "https://www.linkedin.com/in/hugo-benoist/",
      "nom" : "Benoist",
      "prenom" : "Hugo",
      "titre" : "Cofondateur de la société BreacHunt et cofondateur de la communauté OSINT-FR",
      "photo" : "assets/img/intervenant2.png",
      "template" : "assets/img/homme.png"
    }, {
      "description" : "PDG de Skyrock et fondateur de Skred",
      "id" : 11,
      "lien" : "#",
      "nom" : "Bellanger",
      "prenom" : "Pierre",
      "titre" : "PDG de Skyrock et fondateur de Skred",
      "photo" : "assets/img/intervenant2.png",
      "template" : "assets/img/homme.png"
    }, {
      "description" : "Responsable politique publique et relation gouvernementale chez Google Cloud",
      "id" : 12,
      "lien" : "https://www.linkedin.com/in/fenitra-ravelomanantsoa-84820924/",
      "nom" : "Ravelomanantsoa",
      "prenom" : "Fenitra",
      "titre" : "Responsable politique publique et relation gouvernementale chez Google Cloud",
      "photo" : "assets/img/intervenant2.png",
      "template" : "assets/img/homme.png"
    }, {
      "description" : "Cybersecurity CTO Capgemini",
      "id" : 13,
      "lien" : "https://www.linkedin.com/in/luisdelabarre/",
      "nom" : "Delabarre",
      "prenom" : "Luis",
      "titre" : "Cybersecurity CTO Capgemini",
      "photo" : "assets/img/intervenant2.png",
      "template" : "assets/img/homme.png"
    }, {
      "description" : "Délégué Général CESIN",
      "id" : 14,
      "lien" : "https://www.linkedin.com/in/alain-bouill%C3%A9-8111351/",
      "nom" : "Bouillé",
      "prenom" : "Alain",
      "titre" : "Délégué Général CESIN",
      "photo" : "assets/img/intervenant2.png",
      "template" : "assets/img/homme.png"
    }, {
      "description" : "Directeur des partenariats et des relations extérieures FIC",
      "id" : 15,
      "lien" : "https://www.linkedin.com/in/cl%C3%A9ment-rossi-87927827/",
      "nom" : "Rossi",
      "prenom" : "Clément",
      "titre" : "Directeur des partenariats et des relations extérieures FIC",
      "photo" : "assets/img/intervenant2.png",
      "template" : "assets/img/homme.png"
    }, {
      "description" : "CEO & Co-fondateur de YOGOSHA",
      "id" : 16,
      "lien" : "https://www.linkedin.com/in/yassirkazar/",
      "nom" : "Kazar",
      "prenom" : "Yassir",
      "titre" : "CEO & Co-fondateur de YOGOSHA",
      "photo" : "assets/img/intervenant2.png",
      "template" : "assets/img/homme.png"
    }, {
      "description" : "Architecte Sécurité chez CISCO",
      "id" : 17,
      "lien" : "https://www.linkedin.com/in/bgh/",
      "nom" : "Ghorra",
      "prenom" : "Béatrice",
      "titre" : "Architecte Sécurité chez CISCO",
      "photo" : "assets/img/intervenant2.png",
      "template" : "assets/img/homme.png"
    }, {
      "description" : "Avocate et associée chez DC Avocat",
      "id" : 18,
      "lien" : "https://www.linkedin.com/in/deboracohen/",
      "nom" : "Cohen",
      "prenom" : "Debora",
      "titre" : "Avocate et associée chez DC Avocat",
      "photo" : "assets/img/intervenant2.png",
      "template" : "assets/img/homme.png"
    }, {
      "description" : "Conseiller en maitrise des risques et management de transition",
      "id" : 19,
      "lien" : "https://www.linkedin.com/in/chandara-ok-a4622b34/",
      "nom" : "Ok",
      "prenom" : "Chandara",
      "titre" : "Conseiller en maitrise des risques et management de transition",
      "photo" : "assets/img/intervenant2.png",
      "template" : "assets/img/homme.png"
    }, {
      "description" : "Consultante en management des risques",
      "id" : 20,
      "lien" : "https://www.linkedin.com/in/justine-cabanis-60a4b386/",
      "nom" : "Cabanis",
      "prenom" : "Justine",
      "titre" : "Consultante en management des risques",
      "photo" : "assets/img/intervenant2.png",
      "template" : "assets/img/homme.png"
    }, {
      "description" : "DPO et directeur compliance",
      "id" : 21,
      "lien" : "https://www.linkedin.com/in/frederic-boissart-19b34630/",
      "nom" : "Boissart",
      "prenom" : "Frédéric",
      "titre" : "DPO et directeur compliance",
      "photo" : "assets/img/intervenant2.png",
      "template" : "assets/img/homme.png"
    }, {
      "description" : "Chercheur et consultant sur les questions de cyber-sécurité et cyber-défense",
      "id" : 22,
      "lien" : "https://www.linkedin.com/in/guyphilippegoldstein/",
      "nom" : "Goldstein",
      "prenom" : "Guy-Philippe",
      "titre" : "Chercheur et consultant sur les questions de cyber-sécurité et cyber-défense",
      "photo" : "assets/img/intervenant2.png",
      "template" : "assets/img/homme.png"
    }, {
      "description" : "Fondatrice de Thalia NeoMédia",
      "id" : 23,
      "lien" : "https://www.linkedin.com/in/delphinechevallier/",
      "nom" : "Chevallier",
      "prenom" : "Delphine",
      "titre" : "Fondatrice de Thalia NeoMédia",
      "photo" : "assets/img/intervenant2.png",
      "template" : "assets/img/homme.png"
    }]
    this.intervenants.reverse();
    this.emit();
  }

  getOneById(id: number) {
    for (let inter of this.intervenants)
      if (inter.id == id) return inter;
    return null
  }

}
