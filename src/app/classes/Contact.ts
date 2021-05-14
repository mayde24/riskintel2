export class Contact {

  _id: number;
  _nom: string;
  _prenom: string;
  _email: string;
  _sujet: string;
  _message: string;

  constructor(id: number, nom: string, prenom: string, email: string, sujet: string, message: string) {
    this._id = id;
    this._nom = nom;
    this._prenom = prenom;
    this._email = email;
    this._sujet = sujet;
    this._message = message;
  }
}
