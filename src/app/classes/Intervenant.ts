export class Intervenant {

  _id: number;
  _nom: string;
  _prenom: string;
  _photo: string;
  _description: string;
  _titre: string;
  _lien: string;
  _template: string;

  constructor(id: number, nom: string, prenom: string, description: string, photo: string, template: string, lien: string, titre: string) {
    this._id = id;
    this._nom = nom;
    this._prenom = prenom;
    this._description = description;
    this._lien = lien;
    this._photo = photo;
    this._template = template;
    this._titre = titre;
  }
}
